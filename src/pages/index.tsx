import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/image.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Template</h1>
      <p>A ReactJS + Next.js Template.</p>
    </Container>
  )
}

export default Home
