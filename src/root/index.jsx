import React from 'react'
import { Footer } from '../Components/Footer'
import { MyAccount } from '../Components/MyAccount'
import { Navbar } from '../Components/Navbar'
import { Params } from '../Components/Params'
import { ShoppingCart } from '../Components/ShoppingCart'
import { Home } from '../pages/Home'
import { Container } from './style'
import {Routes, Route} from 'react-router-dom'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
      <Container>
          <Routes>
            <Route element={<Navbar />}>
              {navbar.map(({id, title, path, element, isPrivate}) => {
                if(!isPrivate) {
                  return (
                    <Route key={id} path={path} element={element} />
                  )
                } else {
                  if(localStorage.getItem('greenshopToken')) {
                     return <Route key={id} path={path} element={element} />
                  }  
                }
                
              })}
            </Route>
          </Routes>
          <Footer />
      </Container>
  )
}
