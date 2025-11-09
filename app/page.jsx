"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Banner from "@/components/banner"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import SkillProficiency from "@/components/skill-proficiency"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ResumeDownload from "../components/resume-download"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-gradient-to-b from-background via-background to-background">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <SkillProficiency />
      <Certifications />
      <ResumeDownload />
      <Contact />
      <Footer />
    </main>
  )
}
