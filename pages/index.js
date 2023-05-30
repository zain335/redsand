import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function index() {
  return (
    <div style={{
      background:
        "url('https://images.unsplash.com/photo-1602126694259-edff620419cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA') center; background-size: cover;"
      , position: "relative"
    }}>
      <NavBar />
      <Hero />
    </div>
  )
}
