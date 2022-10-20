import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Home } from '../pages/Home'
import { Container } from './style'

export const Root = () => {
  return (
      <Container>
          <Navbar />
          <Home />
          <Footer />
      </Container>
  )
}
