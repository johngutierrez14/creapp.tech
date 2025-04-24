import React from 'react'
import Landing from './landing.jsx'
import Footer from '../components/footer.jsx'
import Servicios from './services.jsx'
import About from './about.jsx'
import Portfolio from './portfolio.jsx'


export default function Home() {
  return (
    <>
      <Landing />
      <Servicios />
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}
