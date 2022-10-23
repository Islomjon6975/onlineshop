import React from 'react'
import ProductsContext from './Products'
import { RegistrationContext } from './RegistrationContext'

export const Context = ({children}) => {
  return (
    <ProductsContext>
      <RegistrationContext>
        {children}
      </RegistrationContext>
    </ProductsContext>
  )
}
