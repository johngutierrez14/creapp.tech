import React from 'react'
import Landing from './landing.jsx'
import Navbar from '../components/navbar'
import Footer from '../components/footer.jsx'
import Servicios from './services.jsx'


export default function Home() {
  return (
    <>
      <Landing />
      <Servicios />
      <Footer />
    </>
  )
}
