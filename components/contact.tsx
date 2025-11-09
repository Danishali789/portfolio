"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: "danish876a@gmail.com",
      href: "mailto:danish876a@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 7903576766",
      href: "tel:+917903576766",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Danish Margoob",
      href: "https://www.linkedin.com/in/danish-margoob-a63924220/",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 text-lg">
          Let's collaborate and create something amazing together
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center"
            >
              <div className="text-3xl mb-3">{link.icon}</div>
              <h3 className="text-sm font-semibold text-foreground/70 mb-1">{link.label}</h3>
              <p className="text-foreground font-medium group-hover:text-accent transition-colors">{link.value}</p>
            </Link>
          ))}
        </div>

        {/* Contact Form */}
        <div className="relative bg-card/30 backdrop-blur-sm border border-border/40 rounded-2xl p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-input border border-border/40 rounded-lg px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-input border border-border/40 rounded-lg px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-input border border-border/40 rounded-lg px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-input border border-border/40 rounded-lg px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              {submitted ? "✓ Message Sent!" : loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
