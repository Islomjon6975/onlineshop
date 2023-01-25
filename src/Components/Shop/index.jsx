import React from 'react'
import { useProducts } from '../../context/Products'
import { Card } from '../Card'
import { Container, Title, Wrapper } from './style'

export const ShopComponent = () => {
    const [state] = useProducts()
  return (
    <Container>
        <Title>Products</Title>
        <Wrapper>
            {state.data.map((value) => {
                return(
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
            })}
            
        </Wrapper>
    </Container>
  )
}
