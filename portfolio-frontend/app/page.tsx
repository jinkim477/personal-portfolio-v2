"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1d1d1f]">
      {/* Hero Section */}
      <section ref={ref} className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ opacity, scale }}>
            John Doe
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-[#86868b] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Product Designer & Developer
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#86868b] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-all duration-300"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ArrowDown className="animate-bounce h-6 w-6 text-[#86868b]" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-[#f5f5f7] rounded-3xl overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-[#e6e6e6] to-[#f5f5f7]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div>
              <p className="text-lg text-[#424245] leading-relaxed mb-6">
                I'm a passionate product designer and developer with over 5 years of experience creating elegant,
                user-centered digital experiences. My approach combines aesthetic sensibility with technical expertise
                to build products that are both beautiful and functional.
              </p>
              <p className="text-lg text-[#424245] leading-relaxed mb-8">
                Based in San Francisco, I've worked with startups and established companies to launch products that
                millions of people use daily. I believe in minimalism, attention to detail, and creating experiences
                that feel natural and intuitive.
              </p>
              <Button className="rounded-full px-6 bg-[#1d1d1f] hover:bg-[#424245] text-white transition-all duration-300">
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 md:px-8 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <SkillBadge name="UI/UX Design" />
              <SkillBadge name="Product Design" />
              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="Figma" />
              <SkillBadge name="Framer" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="Motion Design" />
              <SkillBadge name="Design Systems" />
              <SkillBadge name="Prototyping" />
              <SkillBadge name="User Research" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Finance App Redesign"
              description="A complete redesign of a financial management application focusing on simplicity and data visualization."
              image="/placeholder.svg?height=400&width=600"
              tags={["UI/UX", "Mobile App", "Fintech"]}
            />
            <ProjectCard
              title="E-commerce Platform"
              description="An end-to-end e-commerce solution with a focus on performance and conversion optimization."
              image="/placeholder.svg?height=400&width=600"
              tags={["Web App", "React", "E-commerce"]}
            />
            <ProjectCard
              title="Health Tracking Dashboard"
              description="A comprehensive health metrics dashboard for a wellness startup."
              image="/placeholder.svg?height=400&width=600"
              tags={["Dashboard", "Data Viz", "Healthcare"]}
            />
            <ProjectCard
              title="Creative Portfolio Template"
              description="A customizable portfolio template for creative professionals with animation effects."
              image="/placeholder.svg?height=400&width=600"
              tags={["Template", "Animation", "Creative"]}
            />
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#86868b] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-all duration-300"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
            <p className="text-[#86868b] text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>

            <ContactForm />

            <div className="flex justify-center gap-6 mt-12">
              <Link href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-300">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-300">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-300">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#e6e6e6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#86868b] mb-4 md:mb-0">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
