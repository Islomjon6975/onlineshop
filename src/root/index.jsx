import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Container } from './style'
import {Routes, Route, Navigate} from 'react-router-dom'
import { navbar } from '../utils/navbar'
import { myprofile } from '../utils/myprofile'
import { MyAccount } from '../Components/MyAccount'

export const Root = () => {
  const token = JSON.parse(localStorage.getItem('greenshopToken'))
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
              <Route element={<MyAccount />}>
                {myprofile.map(({ id, path, element }) => {
                  return  (
                    <Route key={id} path={path} element={element} />
                )})}
            </Route>
            </Route>
            
          </Routes>
          <Footer />
      </Container>
  )
}
