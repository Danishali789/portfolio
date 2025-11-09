"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayoutContent({ children }) {
  const [theme, setTheme] = useState("dark")

  // <CHANGE> Added dark/light mode toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-lg bg-card hover:bg-muted transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.121-2.121a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 001.414-1.414zM2.457 4.457a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 101.414-1.414L2.457 4.457zm15.364 11.313l-2.121-2.121a1 1 0 10-1.414 1.414l2.121 2.121a1 1 0 001.414-1.414zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-1-8a1 1 0 00-1-1H6a1 1 0 000 2h8a1 1 0 001-1zm-9 15a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
