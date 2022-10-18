import React from 'react'
import { Login } from '../Login'
import { Banners } from './Banners'
import { Header } from './Header'
import { Posts } from './Posts'
import { Products } from './Products'

export const HomeComponents = () => {
  return (
    <>
        <Header />
        <Products />
        {/* <Banners /> */}
        {/* <Posts /> */}
        <Login />
    </>
  )
}
