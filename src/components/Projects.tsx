"use client"

import { motion } from "framer-motion"
import {
  FolderGit2,
  GitBranch,
  Server,
  Database,
  Container,
  Terminal,
  ArrowRight,
  Shield,
  Layers,
  Code2,
  ExternalLink,
  Boxes,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  focus: string
  description: string
  highlights: string[]
  tech: string[]
  architecture: {
    frontend?: string
    backend?: string
    database?: string
    deployment?: string
  }
}

const projects: Project[] = [
  {
    title: "IT Asset Management Platform",
    focus: "Tunisie Télécom",
    description: "Designed a container-ready Full-Stack architecture for managing IT assets across the organization.",
    highlights: [
      "Secure session management implementation",
      "Architectural separation of concerns",
      "Container-ready deployment structure",
      "RESTful API design patterns",
    ],
    tech: ["Angular", "Spring Boot", "MySQL", "Docker", "Linux"],
    architecture: {
      frontend: "Angular SPA",
      backend: "Spring Boot API",
      database: "MySQL",
      deployment: "Docker / Linux",
    },
  },
  {
    title: "Name Matching & Deduplication Tool",
    focus: "Data Processing Automation",
    description: "High-performance Python CLI tool for data processing automation with modular architecture.",
    highlights: [
      "Modular, extensible architecture",
      "Command-line interface design",
      "High-efficiency data processing",
      "Automation-ready scripting",
    ],
    tech: ["Python", "CLI", "Data Processing", "Automation"],
    architecture: {
      frontend: "CLI Interface",
      backend: "Python Core",
      database: "File I/O",
      deployment: "Standalone",
    },
  },
]

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <FolderGit2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            <span className="text-muted-foreground">$</span> projects
          </h2>
        </motion.div>
        <p className="text-muted-foreground max-w-2xl">
          Production-ready applications showcasing DevOps principles and modern architecture patterns
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors group">
              {/* Project Header - Repository Style */}
              <CardHeader className="border-b border-border bg-card">
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-mono text-lg md:text-xl flex items-center gap-2">
                        {project.title}
                        <Badge variant="outline" className="font-normal text-xs">
                          {project.focus}
                        </Badge>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-mono">main</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Architecture Diagram */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      ARCHITECTURE
                    </h4>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <div className="space-y-4">
                        {/* Frontend Layer */}
                        <motion.div
                          className="flex items-center gap-3 p-3 bg-card rounded-md border border-border"
                          whileHover={{ x: 5 }}
                        >
                          <Code2 className="w-5 h-5 text-secondary" />
                          <div className="flex-1">
                            <span className="text-sm font-mono text-secondary">Frontend</span>
                            <p className="text-xs text-muted-foreground">{project.architecture.frontend}</p>
                          </div>
                        </motion.div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                        </div>

                        {/* Backend Layer */}
                        <motion.div
                          className="flex items-center gap-3 p-3 bg-card rounded-md border border-border"
                          whileHover={{ x: 5 }}
                        >
                          <Server className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <span className="text-sm font-mono text-primary">Backend</span>
                            <p className="text-xs text-muted-foreground">{project.architecture.backend}</p>
                          </div>
                        </motion.div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                        </div>

                        {/* Database Layer */}
                        <motion.div
                          className="flex items-center gap-3 p-3 bg-card rounded-md border border-border"
                          whileHover={{ x: 5 }}
                        >
                          <Database className="w-5 h-5 text-yellow-500" />
                          <div className="flex-1">
                            <span className="text-sm font-mono text-yellow-500">Data Layer</span>
                            <p className="text-xs text-muted-foreground">{project.architecture.database}</p>
                          </div>
                        </motion.div>

                        {/* Deployment Badge */}
                        <div className="flex items-center justify-center gap-2 pt-2 border-t border-border">
                          <Container className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs font-mono text-muted-foreground">
                            {project.architecture.deployment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights & Tech */}
                  <div className="space-y-6">
                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        KEY HIGHLIGHTS
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: hIndex * 0.1 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                        <Boxes className="w-4 h-4" />
                        TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
