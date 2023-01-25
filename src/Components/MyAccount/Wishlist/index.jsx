import React from 'react'
import { useProducts } from '../../../context/Products';
import { Card } from '../../Card'
import { Container } from './style'

export const Wishlist = () => {
    const [state] = useProducts();
  return (
    <Container>
        {   state.favourites.length >= 1
            ?
            (state.favourites.map((value) => {
                return (
                    <Card
                        key={value?.id}
                        id={value?.id}
                        title={value?.title}
                        img={value?.img}
                        price={value?.price}
                        salePrice={value?.salePrice}
                        discount={value?.discount}
                        like={value?.like}
                        quantity={value?.quantity}
                        addtocart={value?.addtocart}
                    />
                )
            })) 
            : 
            <h3>No Wishlist.</h3>
        }
    </Container>
  )
}
