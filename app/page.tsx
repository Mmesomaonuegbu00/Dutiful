import Appoint from '@/Components/Appointments/Appoint'
import Discover from '@/Components/Discover/Discover'
import Hero from '@/Components/Hero/Hero'
import Review from '@/Components/Reviews/Review'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Review/>
      <Discover/>
      <Appoint/>
      
    </div>
  )
}

export default Home
