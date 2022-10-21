import React from 'react'
import { Footer } from '../Components/Footer'
import { MyAccount } from '../Components/MyAccount'
import { Navbar } from '../Components/Navbar'
import { Params } from '../Components/Params'
import { Home } from '../pages/Home'
import { Container } from './style'

export const Root = () => {
  return (
      <Container>
          <Navbar />
          {/* <Home /> */}
          {/* <Params /> */}
          <MyAccount />
          <Footer />
      </Container>
  )
}
