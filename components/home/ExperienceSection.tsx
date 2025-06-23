"use client"

import { motion } from "framer-motion"
import { Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import TimelineExperience from "./TimelineExperience"

const experiences = [
  {
    title: "Software Engineer",
    company: "Hbits",
    period: "Feb 2024 - Present",
    location: "Mumbai",
    description:
      "Leading frontend development initiatives and architecting scalable web applications using React and Next.js ecosystem.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led frontend architecture decisions for 3 major projects",
      "Mentored 2 junior developers and conducted code reviews",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Software Developer",
    company: "Medisage",
    period: "Aug 2023 - Feb 2024",
    location: "Mumbai",
    description:
      "Developed user-centric features for healthcare platform with focus on real-time communication and content management.",
    achievements: [
      "Increased user engagement by 60% with new interactive features",
      "Reduced page load times by 35% through optimization",
      "Implemented responsive design across all platform components",
    ],
    technologies: ["React", "Redux", "Material UI", "WebRTC"],
  },
  {
    title: "Frontend Developer",
    company: "Tech Q Ware Technologies",
    period: "Jun 2022 - Jul 2023",
    location: "Remote",
    description:
      "Built custom components and managed multiple client projects with focus on user experience and code maintainability.",
    achievements: [
      "Successfully delivered 5+ projects on time and within budget",
      "Improved code reusability by 50% through component library",
      "Enhanced overall user experience across all projects",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Firebase"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-white font-medium">Professional Journey</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building impactful solutions across diverse industries and technologies
          </p>
        </motion.div>
        {/* Enhanced Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
          />
          {/* Experience items */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <TimelineExperience key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6 text-lg">Ready to add your company to this timeline?</p>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 