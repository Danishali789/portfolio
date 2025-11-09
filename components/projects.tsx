"use client"

import { useEffect, useRef, useState } from "react"

const projectsData = [
  {
    name: "GSF CarParts",
    description:
      "E-commerce platform with advanced product search and filtering, built with server-side rendering for optimal SEO and performance.",
    technologies: ["Next.js", "Tailwind CSS", "Redux Toolkit", "GraphQL"],
    highlights: ["SSR Components", "Performance Optimized", "Responsive Design", "GraphQL Integration"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Miraxsis",
    description:
      "Comprehensive appointment and inventory management system with accessible UI components following WCAG standards.",
    technologies: ["React.js", "SCSS", "Redux Toolkit", "REST API"],
    highlights: ["Accessible Components", "Complex State Management", "Inventory Module", "Appointment Scheduling"],
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}
              />

              <div className="relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6 sm:p-8 h-full hover:border-accent/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-accent font-semibold mb-4">Project</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">Highlights</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                          <span className="text-accent">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
