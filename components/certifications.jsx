"use client"

import { useEffect, useRef, useState } from "react"

const certificationsData = [
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    date: "2025",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-873599d8-c92e-4e19-8719-31789c224497.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-873599d8-c92e-4e19-8719-31789c224497.jpg",
  },
  {
    title: "CSS for Responsive Web Design",
    issuer: "Udemy",
    date: "2025",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-dd99e11a-f2b6-4824-87af-5889339db730.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-dd99e11a-f2b6-4824-87af-5889339db730.jpg",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2022",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/problem%20solving-0CMveR5PE7wKsvJPVKITb66Vr0TjA7.png",
    link: "https://www.hackerrank.com/certificates/iframe/8d614dd67c25",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/java%20script%20problem%20solving-82BUe5sfsdQOMuF6HM0XNP4or2JvkP.png",
    link: "https://www.hackerrank.com/certificates/iframe/b08f254ca5fc",
  },
]

export default function Certifications() {
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
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-accent/60 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/30 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-foreground/60 mb-3">{cert.issuer}</p>

                  {/* Footer with date and link */}
                  <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
                    <span className="text-xs text-foreground/50">{cert.date}</span>
                    <svg
                      className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
