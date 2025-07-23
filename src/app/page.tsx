'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Sections/Hero'
import HowItWorks from './components/Sections/HowItWorks'
import ForHomeowners from './components/Sections/ForHomeowners'
import ForResidents from './components/Sections/ForResidents'
import ContactUs from './components/Sections/ContactUs'
import Footer from './components/Footer'

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [pathname])

  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <HowItWorks />
      <ForHomeowners />
      <ForResidents />
      <ContactUs />
<Footer/>
      </>
  )
}
