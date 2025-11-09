"use client"

import { useEffect, useRef, useState } from "react"

const skillsCategories = [
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Zustand"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "HTML5", "CSS3"],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "Styled Components", "SCSS"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Vercel", "Postman", "VSCode", "AWS", "Docker", "CI/CD"],
  },
  {
    category: "AI & Development Tools",
    skills: ["Github Copilot", "v0 (Vercel)", "Cursor AI"],
  },
]

export default function Skills() {
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
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="relative bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:border-accent/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/20">
                <h3 className="text-lg font-bold text-foreground mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 border border-accent/20 text-accent text-xs rounded-full font-medium hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-110"
                    >
                      {skill}
                    </span>
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
