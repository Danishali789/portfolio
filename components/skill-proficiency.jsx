"use client"

import { useEffect, useRef, useState } from "react"

const skillProficiency = [
  { name: "React.js", proficiency: 95 },
  { name: "Next.js", proficiency: 92 },
  { name: "JavaScript", proficiency: 94 },
  { name: "Tailwind CSS", proficiency: 96 },
  { name: "TypeScript", proficiency: 85 },
  { name: "Redux Toolkit", proficiency: 88 },
  { name: "Node.js", proficiency: 80 },
  { name: "MongoDB", proficiency: 82 },
]

export default function SkillProficiency() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [proficiencies, setProficiencies] = useState(skillProficiency.map(() => 0))

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

  useEffect(() => {
    if (!isVisible) return

    const intervals = skillProficiency.map((skill, index) => {
      return setInterval(() => {
        setProficiencies((prev) => {
          const newProficiencies = [...prev]
          if (newProficiencies[index] < skill.proficiency) {
            newProficiencies[index] = Math.min(newProficiencies[index] + 1, skill.proficiency)
          }
          return newProficiencies
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skill Proficiency
          </span>
        </h2>

        <div className="space-y-8">
          {skillProficiency.map((skill, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm font-bold text-accent">{proficiencies[idx]}%</span>
              </div>

              {/* Progress Bar Background */}
              <div className="w-full h-3 bg-card/60 rounded-full overflow-hidden border border-border/40 shadow-inner">
                {/* Animated Progress Bar */}
                <div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{
                    width: isVisible ? `${proficiencies[idx]}%` : "0%",
                    boxShadow: `0 0 20px rgba(99, 102, 241, 0.5)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
