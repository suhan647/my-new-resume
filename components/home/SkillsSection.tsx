"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"

const skills = [
  { name: "Next.js", logo: "/tech-logos/nextjs.svg", level: 80, color: "from-indigo-500 to-purple-600" },
  { name: "React.js", logo: "/tech-logos/react.svg", level: 80, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", logo: "/tech-logos/javascript.svg", level: 80, color: "from-yellow-500 to-orange-500" },
  { name: "TypeScript", logo: "/tech-logos/typescript.svg", level: 85, color: "from-blue-600 to-indigo-600" },
  { name: "Redux Toolkit", logo: "/tech-logos/redux.svg", level: 80, color: "from-purple-600 to-pink-600" },
  { name: "Zustand", logo: "/tech-logos/zustand.svg", level: 85, color: "from-emerald-500 to-teal-500" },
  { name: "Material UI", logo: "/tech-logos/materialui.svg", level: 80, color: "from-blue-500 to-purple-500" },
  { name: "Tailwind CSS", logo: "/tech-logos/tailwindcss.svg", level: 85, color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", logo: "/tech-logos/nodejs.svg", level: 50, color: "from-green-500 to-emerald-500" },
]

export default function SkillsSection() {
  const { scrollYProgress } = useScroll()
  return (
    <section id="skills" className="py-32 relative">
      <motion.div
        className="container mx-auto px-6"
        style={{
          y: useTransform(scrollYProgress, [0.1, 0.3], [50, -50]),
        }}
      >
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
            <Code className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-white font-medium">Technical Skills</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mastering modern web technologies to build exceptional digital experiences
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="bg-slate-800/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 p-6 text-center hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-0 space-y-4 relative z-10">
                  <div className="relative">
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-xl shadow-lg bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name + " logo"}
                        className="w-10 h-10 object-contain drop-shadow-2xl"
                        style={{ filter: "drop-shadow(0 4px 12px rgba(80,80,200,0.25))" }}
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-colors text-lg">
                    {skill.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 