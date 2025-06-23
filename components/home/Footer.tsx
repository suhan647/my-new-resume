"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-700 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-gray-400 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-lg">© 2024 Suhan Ahmed. Built with Next.js & Tailwind CSS</p>
            <p className="text-sm mt-1">Crafted with passion and attention to detail</p>
          </div>
          <div className="flex space-x-8">
            <motion.a
              href="https://github.com/suhan647"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/suhan-ahmed-5978951ba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="mailto:suhanahmed647@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-8 w-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 