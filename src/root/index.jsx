import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Container } from './style'
import {Routes, Route, Navigate} from 'react-router-dom'
import { navbar } from '../utils/navbar'
import { useProducts } from '../context/Products'

export const Root = () => {
  const token = JSON.parse(localStorage.getItem('greenshopToken'))
  const [state, dispatch] = useProducts()
  return (
      <Container>
          <Routes>
            <Route element={<Navbar />}>
              <Route path='/' element={<Navigate to='/home' />} />
              {navbar.map(({id, title, path, element, isPrivate}) => {
                  return (
                    !isPrivate && <Route exact key={id} path={path} element={element} />
                  )
              })}
              {navbar.map(({id, title, path, element, isPrivate}) => {
                  return (
                    isPrivate && <Route exact key={id} path={path} element={token && element } />
                  )
              })}
            </Route>
          </Routes>
          <Footer />
      </Container>
  )
}
