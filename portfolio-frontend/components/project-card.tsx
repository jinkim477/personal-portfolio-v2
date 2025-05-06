"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      <div className="aspect-video overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
            <Link href={link} target="_blank" rel="noopener noreferrer"className="text-[#86868b] hover:text-[#1d1d1f]">
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
        <p className="text-[#86868b] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-medium bg-[#f5f5f7] px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
