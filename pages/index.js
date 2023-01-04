import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'


function index() {
  return (
    <div>
      <Head>
        <title>
          photography
        </title>
      </Head>
        <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive'/>
  
    </div>
  )
}

export default index