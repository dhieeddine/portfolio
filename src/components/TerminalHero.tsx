"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Circle } from "lucide-react"

const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("")
  const fullCommand = "dhia@enit:~$ ./start-career.sh --role=devops"
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setDisplayedText(fullCommand.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/5 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary/10 rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Network nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.circle
            cx="20%"
            cy="30%"
            r="4"
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="80%"
            cy="20%"
            r="4"
            fill="hsl(var(--secondary))"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.circle
            cx="70%"
            cy="70%"
            r="4"
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line
            x1="20%"
            y1="30%"
            x2="80%"
            y2="20%"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.line
            x1="80%"
            y1="20%"
            x2="70%"
            y2="70%"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="max-w-4xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Terminal Window */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <Circle className="w-3 h-3 fill-red-500 text-red-500" />
              <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <Circle className="w-3 h-3 fill-green-500 text-green-500" />
              <span className="ml-4 text-sm text-muted-foreground font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                terminal
              </span>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-lg md:text-xl">
              <span className="text-primary">{displayedText}</span>
              <span
                className={`inline-block w-3 h-6 bg-primary ml-1 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </motion.div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Dhia Eddine{" "}
              <span className="text-primary">Barhoumi</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-mono">
              Software Engineering Student @ ENIT
            </p>
            <p className="text-lg text-muted-foreground">
              Cloud Native & DevOps Enthusiast
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
          >
            Engineering student bridging the gap between Development and Operations.
            Passionate about building scalable architectures, automating deployment
            pipelines (CI/CD), and optimizing cloud infrastructure. Background in
            Full-Stack development reinforced by strong networking knowledge (CCNA).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20">
              # DevOps
            </span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-mono border border-secondary/20">
              # Cloud-Native
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20">
              # Platform-Engineering
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TerminalHero
