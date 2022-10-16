import React from 'react'
import { Login } from '../Components/Login'
import { Navbar } from '../Components/Navbar'
import { Home } from '../pages/Home'
import { Container } from './style'

export const Root = () => {
  return (
    <Container>
        <Navbar />
        <Home />
        {/* <Login /> */}
    </Container>
  )
}
