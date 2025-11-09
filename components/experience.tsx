"use client"

import { useEffect, useRef, useState } from "react"

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Net Solutions",
    location: "Chandigarh",
    period: "Jan 2023 – Present",
    highlights: [
      "Led development of scalable, responsive web apps using React.js, Next.js, and Redux Toolkit",
      "Built and maintained reusable component libraries improving development efficiency by 30%",
      "Styled complex UI components using Tailwind CSS, SCSS, and CSS-in-JS with accessibility focus",
      "Collaborated with backend and design teams in Agile sprints",
      "Debugged and resolved critical UI/UX issues improving customer experience",
    ],
  },
]

export default function Experience() {
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
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

              <div className="relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6 sm:p-8 hover:border-accent/40 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-lg text-accent font-semibold">{exp.company}</p>
                    <p className="text-sm text-foreground/60">{exp.location}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-right">
                    <p className="text-sm font-medium text-accent">{exp.period}</p>
                  </div>
                </div>

                <div className="space-y-2 text-foreground/70">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">→</span>
                      <p className="text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
