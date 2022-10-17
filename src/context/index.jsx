import React from 'react'
import ProductsContext from './Products'

export const Context = ({children}) => {
  return (
    <ProductsContext>
        {children}
    </ProductsContext>
  )
}
