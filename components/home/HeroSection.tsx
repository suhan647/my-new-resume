"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { Mail, Download, ArrowRight, Zap, Phone, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "./AnimatedCounter"
import TechStackAnimation from "./TechStackAnimation"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content - Left Side */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-slate-800/80 backdrop-blur-xl rounded-full border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="h-4 w-4 text-indigo-400 mr-2" />
            <span className="text-sm text-white font-medium">Available for hire</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm {" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Suhan Ahmed
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl lg:text-4xl text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Software Developer & {" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                Frontend Specialist
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              2.5+ years of experience crafting exceptional web applications with React, Next.js, and modern
              technologies. Passionate about creating scalable solutions and delivering outstanding user experiences.
            </motion.p>
          </div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={2.5} suffix="+" />
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={10} suffix="+" />
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Projects Built</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={9} suffix="+" />
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Technologies</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200">
              <Mail className="mr-2 h-5 w-5" />
              Hire Me Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="border-2 border-purple-500 bg-transparent text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap gap-6 pt-4 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="h-4 w-4 mr-2 text-indigo-400" />
              <span className="text-sm">suhanahmed647@gmail.com</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-4 w-4 mr-2 text-purple-400" />
              <span className="text-sm">+91 7204832004</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-400 hover:text-pink-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="h-4 w-4 mr-2 text-pink-400" />
              <span className="text-sm">Karnataka, India</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3D Animation - Right Side */}
        <motion.div
          className="relative h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="relative h-full rounded-2xl overflow-hidden border border-purple-500/20 backdrop-blur-sm bg-slate-800/30">
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-700/50">
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto"></div>
                    <p className="text-gray-400">Loading 3D Scene...</p>
                  </div>
                </div>
              }
            >
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }} className="w-full h-full">
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
                <TechStackAnimation />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.3}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  enableDamping
                  dampingFactor={0.05}
                />
              </Canvas>
            </Suspense>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  )
} 