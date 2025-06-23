"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
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
            <Mail className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-white font-medium">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm available for full-time opportunities and exciting projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="bg-slate-800/80 backdrop-blur-xl border border-purple-500/20 p-10">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      I'm always interested in hearing about new opportunities and exciting projects. Let's discuss
                      how I can contribute to your team's success.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Email</h4>
                        <p className="text-gray-300">suhanahmed647@gmail.com</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Phone</h4>
                        <p className="text-gray-300">+91 7204832004</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Location</h4>
                        <p className="text-gray-300">Karnataka, India</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Button asChild className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200">
                    <a href="mailto:suhanahmed647@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-3 h-6 w-6" />
                      Send Email
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </a>
                  </Button>
                  <Button asChild className="w-full bg-slate-700 text-white hover:bg-slate-600 py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200">
                    <a href="https://linkedin.com/in/suhan647" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-3 h-6 w-6" />
                      Connect on LinkedIn
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </a>
                  </Button>
                  <Button asChild className="w-full border-2 border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-500 py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200">
                    <a href="https://github.com/suhan647" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-3 h-6 w-6" />
                      View GitHub Profile
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </a>
                  </Button>
                  <Button asChild className="w-full border-2 border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-500 hover:text-white py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                    <a href="/Suhan_Ahmed_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-3 h-6 w-6" />
                      Download Resume
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 