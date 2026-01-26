'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-16 flex flex-col gap-6">

      
      <div className="flex flex-col">
        <label htmlFor="fullName" className="text-[#532F82] font-medium text-sm mb-1">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-gray-200 bg-[#F8FAFD] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#532F82]"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-[#532F82] text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-200 bg-[#F8FAFD] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#532F82]"
          required
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="businessType" className="text-[#532F82] font-medium text-sm mb-1">Business Type (opttional)</label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="border border-gray-200 bg-[#F8FAFD] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#532F82]"
          required
        >
          <option value="">Select business type</option>
          <option value="tech">Tech</option>
          <option value="retail">Retail</option>
          <option value="services">Services</option>
          <option value="other">Other</option>
        </select>
      </div>


      <div className="flex flex-col">
        <label htmlFor="subject" className="text-[#532F82] font-medium text-sm mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-200 bg-[#F8FAFD] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#532F82]"

          required
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="message" className="text-[#532F82] font-medium text-sm mb-1">Write your message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-200 bg-[#F8FAFD] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#532F82] resize-none h-32"
          required
        ></textarea>
      </div>


      <button
        type="submit"
        className="bg-[#532F82] text-white font-semibold py-3 rounded-md hover:bg-[#41236c] transition"
      >
        Send Message
      </button>

    </form>
  )
}

export default ContactForm
