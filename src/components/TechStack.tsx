"use client"

import { motion } from "framer-motion"
import {
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Database,
  Shield,
  Cpu,
  Network,
  Code2,
  Container,
  LineChart,
  Bot,
} from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: "primary" | "secondary"
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Docker", "CI/CD Concepts", "Linux Administration", "Networking (CCNA)", "Git"],
    color: "primary",
  },
  {
    title: "Infrastructure as Code",
    icon: <Server className="w-5 h-5" />,
    skills: ["Terraform", "Ansible"],
    color: "secondary",
  },
  {
    title: "Backend & Scripting",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Python (Automation)", "Java/Spring Boot", "Bash Scripting"],
    color: "primary",
  },
  {
    title: "Observability & AI",
    icon: <LineChart className="w-5 h-5" />,
    skills: ["Prometheus/Grafana Concepts", "Python for Data/AI"],
    color: "secondary",
  },
]

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <Cpu className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            <span className="text-muted-foreground">$</span> tech_stack
          </h2>
        </motion.div>
        <p className="text-muted-foreground max-w-2xl">
          A comprehensive toolkit for building, deploying, and managing modern infrastructure
        </p>
      </div>

      {/* Server Rack Visualization */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Pipeline connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector dot */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 hidden md:flex items-center justify-center">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      category.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>

                {/* Server Unit Card */}
                <div className="md:ml-16 bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group">
                  {/* Server Header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-muted/30 border-b border-border">
                    <div className={`p-2 rounded-md ${
                      category.color === "primary" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-secondary/10 text-secondary"
                    }`}>
                      {category.icon}
                    </div>
                    <h3 className="font-mono font-semibold text-foreground">
                      {category.title}
                    </h3>
                    {/* Status LEDs */}
                    <div className="ml-auto flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-500"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-xs text-muted-foreground font-mono">
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className={`px-3 py-1.5 text-sm font-mono rounded-md border transition-colors ${
                            category.color === "primary"
                              ? "bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                              : "bg-secondary/5 border-secondary/20 text-secondary hover:bg-secondary/10"
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {category.title === "Infrastructure as Code" && (
                        <span className="px-3 py-1.5 text-sm font-mono rounded-md border border-dashed border-muted-foreground/30 text-muted-foreground italic">
                          Learning in progress...
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Loading bar animation */}
                  <div className="h-1 bg-muted/30 overflow-hidden">
                    <motion.div
                      className={`h-full ${
                        category.color === "primary" ? "bg-primary/50" : "bg-secondary/50"
                      }`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center gap-8 flex-wrap"
        >
          {[
            { icon: <Container className="w-6 h-6" />, label: "Containers" },
            { icon: <GitBranch className="w-6 h-6" />, label: "Version Control" },
            { icon: <Network className="w-6 h-6" />, label: "Networking" },
            { icon: <Shield className="w-6 h-6" />, label: "Security" },
            { icon: <Database className="w-6 h-6" />, label: "Databases" },
            { icon: <Bot className="w-6 h-6" />, label: "Automation" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-default"
            >
              {item.icon}
              <span className="text-xs font-mono">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
