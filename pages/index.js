import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'



function index() {
  return (
    <div>
      <Head>
        <title>
          photography
        </title>
      </Head>
        <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive'/>
        <Slider slides={SliderData} />
      
  
    </div>
  )
}

export default index