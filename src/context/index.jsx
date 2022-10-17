import React from 'react'
import PluginsContext from './Plugins'
import ProductsContext from './Products'

export const Context = ({children}) => {
  return (
    <ProductsContext>
      <PluginsContext>
        {children}
      </PluginsContext>
    </ProductsContext>
  )
}
