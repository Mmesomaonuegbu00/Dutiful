'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: '',
    subject: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-150 mx-auto px-4 sm:px-6 flex flex-col gap-6 mb-20"
    >
      <div className="flex flex-col">
        <label className="text-[18px] text-[#532F82] font-medium mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full h-16 bg-[#F8FAFD] border border-gray-200 rounded-md px-4 focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-[18px] text-[#532F82] font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-16 bg-[#F8FAFD] border border-gray-200 rounded-md px-4 focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[18px] text-[#532F82] font-medium mb-1">
          Business Type <span className="italic text-[#603F8B]">(optional)</span>
        </label>


        <div className="relative">
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full h-16 bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 pr-12 appearance-none focus:outline-none"
          >
            <option value="" className=''></option>
            <option value="tech">Tech</option>
            <option value="retail">Retail</option>
            <option value="services">Services</option>
            <option value="other">Other</option>
          </select>

          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <Image src='/arro.svg'
              width={20}
              height={20}
              alt="dropdown icon" />
          </span>
        </div>
      </div>


      <div className="flex flex-col">
        <label className="text-[18px] text-[#532F82] font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full h-16 bg-[#F8FAFD] border border-gray-200 rounded-md px-4 focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-[18px] text-[#532F82] font-medium mb-1">
          Write your message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-40 bg-[#F8FAFD] border border-gray-200 rounded-md px-4 py-3 resize-none focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full h-16 bg-[#532F82] text-white text-[18px] font-medium rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656]"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
