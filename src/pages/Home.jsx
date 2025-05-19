import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Banner from '../components/Banner'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'

function Home() {
  return <div className=' w-[100%] h-[100%]  ' >
    <div className=' mt-[20px] ' >
      <Navbar />
    </div>
    <Section1 />
    <Banner />
    <Section2 />
    <Section3 />
    <Section4 />

  </div>
}

export default Home