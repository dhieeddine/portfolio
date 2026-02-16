"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send, Terminal, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Send className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-muted-foreground">$</span> connect
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate on cloud infrastructure, DevOps pipelines, or platform engineering projects
          </p>
        </motion.div>

        {/* Terminal-style contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border rounded-lg overflow-hidden shadow-xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-muted-foreground font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              contact.sh
            </span>
          </div>

          {/* Contact Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Greeting */}
            <div className="font-mono text-sm space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo &quot;Let&apos;s build something great together!&quot;
              </p>
              <p className="text-foreground pl-2">
                Let&apos;s build something great together!
              </p>
            </div>

            <Separator className="bg-border" />

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <motion.a
                href="mailto:dhiabarhoumi@enit.utm.tn"
                className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:bg-primary/5"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    dhiabarhoumi@enit.utm.tn
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/dhiabarhoumi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-secondary/50 transition-all hover:bg-secondary/5"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-mono">LinkedIn</p>
                  <p className="text-foreground group-hover:text-secondary transition-colors">
                    /in/dhiabarhoumi
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </motion.a>
            </div>

            <Separator className="bg-border" />

            {/* CTA */}
            <div className="text-center space-y-4">
              <p className="text-muted-foreground text-sm font-mono">
                <span className="text-primary">$</span> ./send-message.sh
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="font-mono gap-2"
                >
                  <a href="mailto:dhiabarhoumi@enit.utm.tn">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-mono gap-2"
                >
                  <a
                    href="https://linkedin.com/in/dhiabarhoumi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Dhia Eddine Barhoumi. Built with Next.js & deployed with 💚
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
