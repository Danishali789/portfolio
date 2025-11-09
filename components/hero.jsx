"use client"

import Link from "next/link"

export default function Hero({ scrollY }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full mix-blend-screen blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
        {/* Main heading with gradient */}
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Danish Margoob
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl font-light text-foreground/80">Frontend Developer & UI Specialist</p>
        </div>

        {/* Description */}
        <p
          className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          I craft accessible, scalable, and visually stunning web experiences using React, Next.js, and modern web
          technologies. Passionate about performance, design, and user experience.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 inline-block"
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
