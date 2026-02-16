"use client"

import { motion } from "framer-motion"
import {
  Award,
  Network,
  BrainCircuit,
  Blocks,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Certification {
  title: string
  issuer: string
  icon: React.ReactNode
  color: string
  description: string
}

const certifications: Certification[] = [
  {
    title: "Introduction to Networks",
    issuer: "Cisco CCNA",
    icon: <Network className="w-6 h-6" />,
    color: "text-blue-400",
    description: "Strong foundation in networking fundamentals, protocols, and infrastructure design",
  },
  {
    title: "Efficient LLM Customization",
    issuer: "NVIDIA",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-green-400",
    description: "Advanced techniques for optimizing and customizing Large Language Models",
  },
  {
    title: "Hashgraph Developer",
    issuer: "Hedera",
    icon: <Blocks className="w-6 h-6" />,
    color: "text-purple-400",
    description: "Distributed ledger technology and decentralized application development",
  },
]

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section id="certifications" className="py-20 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            <span className="text-muted-foreground">$</span> certifications
          </h2>
        </motion.div>
        <p className="text-muted-foreground max-w-2xl">
          Industry-recognized credentials validating technical expertise
        </p>
      </div>

      {/* Certifications Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div key={cert.title} variants={itemVariants}>
            <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="p-6 relative">
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-muted/50 ${cert.color}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-mono">VERIFIED</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className={`text-sm font-mono ${cert.color}`}>
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional credibility note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground font-mono">
          <span className="text-primary">*</span> Continuously expanding knowledge through hands-on projects and certifications
        </p>
      </motion.div>
    </section>
  )
}

export default Certifications
