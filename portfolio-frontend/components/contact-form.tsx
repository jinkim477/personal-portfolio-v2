"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const form = e.target as HTMLFormElement
    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    }
  
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
  
    if (res.ok) setIsSubmitted(true)
  }
  

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white p-8 rounded-3xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-[#86868b] mb-6">Thank you for reaching out. I'll get back to you soon.</p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="rounded-full px-6 bg-[#1d1d1f] hover:bg-[#424245] text-white transition-all duration-300"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#86868b] mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            className="rounded-xl border-[#e6e6e6] focus:border-[#1d1d1f] focus:ring-[#1d1d1f]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#86868b] mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            className="rounded-xl border-[#e6e6e6] focus:border-[#1d1d1f] focus:ring-[#1d1d1f]"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-[#86868b] mb-2">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject of your message"
          className="rounded-xl border-[#e6e6e6] focus:border-[#1d1d1f] focus:ring-[#1d1d1f]"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-[#86868b] mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          className="rounded-xl border-[#e6e6e6] focus:border-[#1d1d1f] focus:ring-[#1d1d1f]"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-full py-6 bg-[#1d1d1f] hover:bg-[#424245] text-white transition-all duration-300"
      >
        Send Message
      </Button>
    </motion.form>
  )
}
