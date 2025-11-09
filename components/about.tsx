"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm a passionate Frontend Developer with 2+ years of experience building scalable, responsive web
              applications. I specialize in creating pixel-perfect user interfaces with a strong focus on performance
              and accessibility.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              My journey in web development started with a deep fascination for creating beautiful digital experiences.
              At <span className="font-semibold text-accent">Net Solutions</span>, I've led the development of multiple
              high-impact projects, collaborating with designers and backend teams to deliver exceptional results.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying the latest advancements in web development.
            </p>
          </div>

          <div
            className={`relative h-96 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-20 blur-2xl" />
            <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  2+
                </div>
                <p className="text-foreground/70 font-medium">Years of Experience</p>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-sm text-foreground/60">Focused on React, Next.js & Modern Web Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
