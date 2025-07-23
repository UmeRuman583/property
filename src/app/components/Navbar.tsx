'use client'

import { useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'HOW IT WORKS', href: 'how-it-works' },
  { label: 'FOR HOMEOWNERS', href: 'for-homeowners' },
  { label: 'FOR RESIDENTS', href: 'for-residents' },
  { label: 'CONTACT US', href: 'contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ml-4">
          <Image
            src="/logo1.svg"
            alt="Logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-bold">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-yellow-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="text-lg font-semibold text-blue-900">Menu</span>
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 space-y-4 font-medium">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-yellow-500"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
