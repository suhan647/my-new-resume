"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, Award } from "lucide-react"

type TimelineExperienceProps = {
  exp: any
  index: number
}

export default function TimelineExperience({ exp, index }: TimelineExperienceProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className="relative">
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-slate-900 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.5 }}
      />

      {/* Experience card */}
      <motion.div
        className="ml-12 mb-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-slate-800/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardContent className="p-0 relative z-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <motion.div
                  className="flex items-center gap-3 mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg backdrop-blur-sm">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                    {exp.title}
                  </h3>
                </motion.div>

                <p className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold text-xl mb-2">
                  {exp.company}
                </p>

                <div className="flex items-center text-gray-400 text-sm gap-4 mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="h-4 w-4 text-indigo-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-pink-400" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {exp.achievements.map((achievement: string, i: number) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-gray-300 hover:text-white transition-colors group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech: string, i: number) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.7 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-white hover:from-indigo-500/30 hover:to-purple-600/30 border border-purple-500/20 px-3 py-1 transition-all duration-300 backdrop-blur-sm"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
} 