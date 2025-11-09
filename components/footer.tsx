"use client"

import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      href: "https://www.linkedin.com/in/danish-margoob-a63924220/",
    },
    {
      name: "Email",
      icon: "📧",
      href: "mailto:danish876a@gmail.com",
    },
  ]

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              DM
            </Link>
            <p className="text-foreground/60 mt-2">Frontend Developer & UI Specialist</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Quick Links</p>
            <ul className="space-y-1">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-card border border-border/40 flex items-center justify-center hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 text-lg"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center">
          <p className="text-foreground/50 text-sm">
            © 2025 Danish Margoob. Crafted with <span className="text-accent">❤</span> using React & Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
