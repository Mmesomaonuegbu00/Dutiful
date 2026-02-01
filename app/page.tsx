import Appoint from '@/Components/LandindPage/Appointments/Appoint'
import Discover from '@/Components/LandindPage/Discover/Discover'
import Hero from '@/Components/LandindPage/Hero/Hero'
import Review from '@/Components/LandindPage/Reviews/Review'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Review />
      <Discover />
      <Appoint />

    </main>
  )
}

export default Home
