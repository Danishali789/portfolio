"use client"

import { Download } from "lucide-react"
import { useEffect, useState } from "react"

export default function ResumeDownload() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark")
      setIsDark(darkMode)
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const handleDownload = () => {
    // Create a link to your resume file
    const resumeUrl = "/resume.pdf" // Add your resume PDF to the public folder
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Danish_Margoob_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">My Resume</h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Resume Card */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
              isDark
                ? "bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-cyan-500"
                : "bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-500"
            }`}
          >
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            {/* Content */}
            <div className="relative p-8 md:p-12 flex flex-col items-center justify-center text-center">
              {/* Document Icon */}
              <div
                className={`mb-6 p-4 rounded-full transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                    : "bg-gradient-to-br from-blue-100 to-cyan-100"
                }`}
              >
                <Download className={`w-12 h-12 ${isDark ? "text-cyan-400" : "text-blue-600"}`} />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Download My Resume</h3>
              <p className={`text-lg mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Get a complete overview of my experience, skills, and qualifications
              </p>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className={`px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-600/50"
                }`}
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>

              {/* File Size Info */}
              <p className={`text-sm mt-6 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                PDF • Last updated: Nov 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
