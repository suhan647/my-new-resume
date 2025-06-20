"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  User,
  Menu,
  X,
  ChevronDown,
  Award,
  Zap,
  GraduationCap,
  ArrowRight,
  Briefcase,
  Calendar,
  Star,
  Code,
  Rocket,
  Github,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type * as THREE from "three"

// New 3D Scene with Rotating Tech Stack
function TechStackAnimation() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRefs = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.4

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2
    }

    meshRefs.current.forEach((mesh, index) => {
      if (mesh) {
        const offset = (index * (Math.PI * 2)) / 6
        mesh.position.x = Math.cos(time + offset) * 3
        mesh.position.z = Math.sin(time + offset) * 3
        mesh.position.y = Math.sin(time * 2 + offset) * 0.5
        mesh.rotation.x = time + offset
        mesh.rotation.y = time * 0.5 + offset
      }
    })
  })

  const techColors = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#06b6d4"]

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Orbiting tech elements */}
      {techColors.map((color, index) => (
        <mesh key={index} ref={(el) => el && (meshRefs.current[index] = el)} position={[3, 0, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Floating rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.1, 8, 32]} />
        <meshStandardMaterial color="#6366f1" metalness={0.9} roughness={0.1} transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[4.5, 0.08, 8, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

// Enhanced Background Component
function ModernBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 2000], [0, -200])
  const y2 = useTransform(scrollY, [0, 2000], [0, -400])

  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1),transparent_50%)]"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08),transparent_50%)]"
        style={{ y: y2 }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Floating colorful particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            i % 4 === 0
              ? "bg-indigo-500"
              : i % 4 === 1
                ? "bg-purple-500"
                : i % 4 === 2
                  ? "bg-pink-500"
                  : "bg-emerald-500"
          } opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -80],
            opacity: [0.4, 0, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            &lt;Suhan.dev/&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-2xl border-b border-purple-500/20 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// Enhanced Experience Component
function TimelineExperience({ exp, index }: { exp: any; index: number }) {
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

export default function Portfolio() {
  const { scrollYProgress } = useScroll()

  const skills = [
    {
      name: "Next.js",
      icon: "⚡",
      level: 80,
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "React.js",
      icon: "⚛️",
      level: 80,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      level: 80,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      level: 85,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Redux Toolkit",
      icon: "🔄",
      level: 80,
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Zustand",
      icon: "🐻",
      level: 85,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Material UI",
      icon: "🎨",
      level: 80,
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Tailwind CSS",
      icon: "🎯",
      level: 85,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 50,
      color: "from-green-500 to-emerald-500",
    },
  ]

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

  const projects = [
    {
      title: "Real Estate Investment Platform",
      description:
        "Comprehensive platform for property listings and investment opportunities with advanced analytics dashboard and real-time market data.",
      tech: ["Next.js", "Tailwind CSS", "Stripe API", "Node"],
      image: "Hbits-website.png",
      highlights: ["10K+ active users", "Real-time data sync", "Mobile-first design"],
      metrics: { users: "100K+", performance: "10%", satisfaction: "95%" },
    },
    {
      title: "Healthcare Communication Platform",
      description:
        "HIPAA-compliant medical platform enabling secure doctor-patient communication with multimedia support and case management.",
      tech: ["Next.ts", "Zustand", "Material UI", "Node.js"],
      image: "medisage-website.png",
      highlights: ["HIPAA compliant", "Real-time messaging", "Secure file sharing"],
      // metrics: { engagement: "60%", loadTime: "35%", uptime: "99.9%" },
      metrics: { users: "30K+", performance: "40%", satisfaction: "95%" },
    },
    {
      title: "Lead Management System (LMS)",
      description:
        "Sales Execution CRM & Marketing Automation Tool. It offers tools for lead generation, tracking, scoring, as well as features for sale execution and marketing analytics.",
      tech: ["Next.ts", "Stripe API", "Material-ui", "Tailwind css"],
      image: "lms.png",
      highlights: ["Lead tracking", "Sales automation", "Marketing analytics"],
      // metrics: { completion: "85%", revenue: "100%", retention: "78%" },
      metrics: {
  leadsTracked: "1K+ leads managed",
  automationRate: "70% tasks auto-assigned",
  conversionBoost: "35% increase in lead conversion",
}
    },
    {
  title: "Ops Portal",
  description:
    "A comprehensive operations dashboard for internal teams to manage customer data, investment records, and document workflows. It enables streamlined collaboration, secure document handling, and direct email communication from within the system.",
  tech: ["React", "TypeScript", "Chakra UI", "React Hook Form", "Yup"],
  image: "ops-portal.png",
  highlights: ["Document automation", "Customer tracking", "Email integration"],
  metrics: {
    docsProcessed: "25K+ documents managed",
    errorReduction: "60% fewer manual errors",
    opsEfficiency: "3x faster task handling",
  },
}
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <ModernBackground />

      <Header />

      {/* Hero Section */}
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
                Hi, I'm{" "}
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
                Software Developer &{" "}
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
            className="relative h-[500px] lg:h-[600px]"
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
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[10, 10, 5]} intensity={0.8} />
                  <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />

                  <TechStackAnimation />

                  {/* <Environment preset="studio" /> */}
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

      {/* Skills Section */}
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
                        className="w-16 h-16 mx-auto rounded-xl shadow-lg bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-2xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.icon}
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

      {/* Professional Journey Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <motion.div
          className="container mx-auto px-6"
          style={{
            y: useTransform(scrollYProgress, [0.6, 0.9], [50, -50]),
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
              <Rocket className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-white font-medium">Featured Work</span>
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions that drive real business impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-800/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-gradient-to-r from-indigo-500/50 to-purple-600/50 backdrop-blur-sm rounded-full p-2"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-white hover:from-indigo-500/30 hover:to-purple-600/30 border border-purple-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-400">
                            <Star className="h-3 w-3 text-indigo-400 mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
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
              <Card className="bg-slate-800/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 p-10 relative overflow-hidden group">
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
                      className="relative w-40 h-40 mx-auto mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-indigo-500 to-purple-600"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-2 rounded-full border border-purple-500/50"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />

                      {/* Profile image placeholder with gradient */}
                      <div className="absolute inset-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <User className="h-16 w-16 text-white" />
                        </motion.div>
                      </div>

                      {/* Status indicator */}
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Ready to Contribute
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Looking for opportunities to grow and make an impact
                    </motion.p>
                  </div>

                  {/* Interactive Status Cards */}
                  <div className="space-y-4">
                    {[
                      {
                        label: "Availability",
                        value: "Immediately",
                        icon: "🟢",
                        color: "from-green-500 to-emerald-500",
                      },
                      {
                        label: "Work Type",
                        value: "Full-time / Remote",
                        icon: "💼",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        label: "Experience",
                        value: "2.5+ Years",
                        icon: "⭐",
                        color: "from-purple-500 to-pink-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 group/item cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span className="text-gray-400 font-medium flex items-center">
                          <span className="mr-2 text-lg">{item.icon}</span>
                          {item.label}
                        </span>
                        <motion.span
                          className="text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
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

      {/* Contact Section */}
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

                  {/* <div className="space-y-6">
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200">
                      <Mail className="mr-3 h-6 w-6" />
                      Send Email
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>

                    <Button className="w-full bg-slate-700 text-white hover:bg-slate-600 py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200">
                      <ExternalLink className="mr-3 h-6 w-6" />
                      Connect on LinkedIn
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>

                    <Button className="w-full border-2 border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-500 py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200">
                      <ExternalLink className="mr-3 h-6 w-6" />
                      View GitHub Profile
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>

                    <Button className="w-full border-2 border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-500 hover:text-white py-6 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                      <Download className="mr-3 h-6 w-6" />
                      Download Resume
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </div> */}
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
      <Download className="mr-3 h-6 w-6" />
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

      {/* Footer */}
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
    </div>
  )
}
