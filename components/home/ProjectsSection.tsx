"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, ExternalLink, Star } from "lucide-react"

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
    metrics: { users: "30K+", performance: "40%", satisfaction: "95%" },
  },
  {
    title: "Lead Management System (LMS)",
    description:
      "Sales Execution CRM & Marketing Automation Tool. It offers tools for lead generation, tracking, scoring, as well as features for sale execution and marketing analytics.",
    tech: ["Next.ts", "Stripe API", "Material-ui", "Tailwind css"],
    image: "lms.png",
    highlights: ["Lead tracking", "Sales automation", "Marketing analytics"],
    metrics: {
      leadsTracked: "1K+ leads managed",
      automationRate: "70% tasks auto-assigned",
      conversionBoost: "35% increase in lead conversion",
    },
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
  },
]

export default function ProjectsSection() {
  const { scrollYProgress } = useScroll()
  return (
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
  )
} 