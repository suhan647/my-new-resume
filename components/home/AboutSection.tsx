"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, GraduationCap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { text: "{ }", top: "10%", left: "10%", delay: 0 },
          { text: "</div>", top: "20%", right: "15%", delay: 1 },
          { text: "const", top: "60%", left: "5%", delay: 2 },
          { text: "=>", top: "70%", right: "10%", delay: 3 },
          { text: "React", top: "40%", left: "15%", delay: 4 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent opacity-20 font-mono text-sm"
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 6 + index,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto px-6">
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
            <User className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-white font-medium">About Me</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The person behind the code - passionate, dedicated, and ready to make an impact
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Me?
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate Software Developer currently pursuing my Bachelor's in Computer Applications at
                  Manipal University. With 2.5+ years of hands-on experience, I specialize in creating modern,
                  scalable web applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg">
                  My expertise spans the entire frontend development ecosystem, from React and Next.js to advanced
                  state management solutions. I'm committed to writing clean, maintainable code and staying at the
                  forefront of industry trends and best practices.
                </p>
                <p className="text-lg">
                  What sets me apart is my ability to bridge the gap between technical excellence and business
                  objectives, ensuring every project I work on delivers real value to users and stakeholders.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4 text-lg flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-indigo-400" />
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-semibold">Bachelor of Computer Applications</p>
                    <p className="text-gray-400 text-sm">Manipal University • 2024</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Diploma in CSE</p>
                    <p className="text-gray-400 text-sm">DACG Polytechnic • 2017-2020</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Languages</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                    English (Professional)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                    Hindi (Professional)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    Urdu (Native)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    Kannada (Native)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 p-4 sm:p-8 md:p-10 relative overflow-hidden group w-full max-w-full">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
              <CardContent className="p-0 space-y-8 relative z-10">
                {/* Profile Section */}
                <div className="text-center">
                  <motion.div
                    className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 mx-auto mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-indigo-500 to-purple-600"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute inset-2 rounded-full border border-purple-500/50"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                    />
                    {/* Profile image placeholder with gradient */}
                    <div className="absolute inset-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <User className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 text-white" />
                      </motion.div>
                    </div>
                    {/* Status indicator */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </motion.div>
                  <motion.h3
                    className="text-xl xs:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Ready to Contribute
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-base xs:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Looking for opportunities to grow and make an impact
                  </motion.p>
                </div>
                {/* Interactive Status Cards */}
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                  {[
                    {
                      label: 'Availability',
                      value: 'Immediately',
                      icon: '🟢',
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      label: 'Work Type',
                      value: 'Full-time / Remote',
                      icon: '💼',
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      label: 'Experience',
                      value: '2.5+ Years',
                      icon: '⭐',
                      color: 'from-purple-500 to-pink-500',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0 p-3 xs:p-4 bg-slate-700/50 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 group/item cursor-pointer w-full overflow-x-auto"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="text-gray-400 font-medium flex items-center text-base xs:text-lg">
                        <span className="mr-2 text-lg">{item.icon}</span>
                        {item.label}
                      </span>
                      <motion.span
                        className="text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-base xs:text-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
                {/* Skills Progress Bars */}
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-bold text-white mb-4 text-lg flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2"
                    >
                      ⚡
                    </motion.div>
                    Core Strengths
                  </h4>
                  {[
                    { skill: "Problem Solving", level: 95, color: "from-green-500 to-emerald-500" },
                    { skill: "Team Collaboration", level: 90, color: "from-blue-500 to-cyan-500" },
                    { skill: "Code Quality", level: 92, color: "from-purple-500 to-pink-500" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.skill}
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300 font-medium">{item.skill}</span>
                        <motion.span
                          className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          {item.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`bg-gradient-to-r ${item.color} h-2 rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute right-0 top-0 w-1 h-full bg-white/50"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Interests with animated tags */}
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-bold text-white mb-4 text-lg">Interests & Hobbies</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Cricket", "Volleyball", "Travelling", "Exercise", "Tech Blogs", "Open Source"].map(
                      (interest, index) => (
                        <motion.div
                          key={interest}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-white hover:from-indigo-500/30 hover:to-purple-600/30 border border-purple-500/20 px-3 py-1 cursor-pointer transition-all duration-300"
                          >
                            {interest}
                          </Badge>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
                {/* Call to Action */}
                <motion.div
                  className="pt-6 border-t border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg p-4 text-center border border-purple-500/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-white font-semibold mb-2">🚀 Ready to start immediately!</p>
                    <p className="text-gray-400 text-sm">Let's build something amazing together</p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 