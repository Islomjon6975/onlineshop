import React from 'react'
import { ProductDescriptionAndReviews } from './ProductDescriptionAndReviews'
import { ProductDetails } from './ProductDetails'
import { ReletedProducts } from './ReletedProducts'

export const Params = () => {
  return (
    <>
        <ProductDetails />
        <ProductDescriptionAndReviews />
        <ReletedProducts />
    </>
  )
}
