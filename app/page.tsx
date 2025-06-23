"use client"

import ModernBackground from "@/components/home/ModernBackground"
import Header from "@/components/home/Header"
import HeroSection from "@/components/home/HeroSection"
import SkillsSection from "@/components/home/SkillsSection"
import ExperienceSection from "@/components/home/ExperienceSection"
import ProjectsSection from "@/components/home/ProjectsSection"
import AboutSection from "@/components/home/AboutSection"
import ContactSection from "@/components/home/ContactSection"
import Footer from "@/components/home/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <ModernBackground />
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
