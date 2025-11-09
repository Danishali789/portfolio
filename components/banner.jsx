"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Banner() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const profileImage =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/danish2-XyaTKM37tMmoySx88gjwBxKtuZbivZ.jpg"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/danish-bsET3P2Lixiqx5p0XJT8YdUOHIW7bL.jpg"

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Profile Image - Half Width */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-0 group-hover:opacity-75 transition duration-500" />
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Danish Margoob - Frontend Developer"
                className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl object-cover shadow-2xl transform group-hover:scale-102 transition duration-300 border border-border/20"
              />
            </div>
          </div>

          {/* Bio Section - Half Width */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Danish Margoob
                </span>
              </h2>
              <p className="text-xl sm:text-2xl font-light text-muted-foreground">Frontend Developer & UI Specialist</p>
            </div>

            <p
              className="text-base sm:text-lg text-foreground/70 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              I craft accessible, scalable, and visually stunning web experiences using React, Next.js, and modern web
              technologies. With 2+ years of professional experience, I'm passionate about delivering high-quality
              solutions that combine beautiful design with solid engineering.
            </p>

            <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:danish876a@gmail.com" className="text-accent hover:text-primary transition">
                  danish876a@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.196.605.404.894.657.885 1.515 1.58 2.627 1.904.526.169 1.064.206 1.578.063l.552-.163a1 1 0 011.255 1.008l-.082 2.467c-.06 1.8 1.218 3.393 2.986 3.393 1.768 0 3.045-1.593 2.987-3.393l-.083-2.467a1 1 0 011.255-1.008l.552.163c.514.143 1.052.106 1.578-.063 1.112-.324 1.97-1.019 2.627-1.904.208-.289.346-.594.404-.894l-1.548-.773a1 1 0 01-.54-1.06l.74-4.435A1 1 0 0115.847 3H17a1 1 0 011 1H2z" />
                </svg>
                <a href="tel:+917903576766" className="text-accent hover:text-primary transition">
                  +91 7903576766
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://www.linkedin.com/in/danish-margoob-a63924220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 inline-block text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
