import React, { useState } from 'react'
import { usePlugins } from '../../context/Plugins'
import { Container, Product, Products } from './style';
import flower1 from '../../assets/images/flower1.png'
import { useProducts } from '../../context/Products';

export const Cart = () => {
    // const [plugin, setPlugin] = usePlugins();
    const [state, dispatch] = useProducts();
  return (
    <Container title="Products" width={500} placement="right" onClose={() => dispatch({type: 'closeCart'})} open={state.basket}>
        <Products>
            {
              state?.cart?.map((value) => {
                return (
                  <Product key={value?.id}>
                    <Product.ImageWrapper>
                      <Product.ImageWrapper.Image src={value?.img} />
                    </Product.ImageWrapper>
                    <Product.Content>
                      <Product.Content.Title>{value?.title}</Product.Content.Title>
                      <Product.Content.Sku>SKU: 1995751877966</Product.Content.Sku>
                      <Product.Content.Price>${value?.price}.00</Product.Content.Price>
                    </Product.Content>
                    <Product.Counter>
                      <Product.Counter.Wrapper><Product.Counter.Decrement /></Product.Counter.Wrapper>
                      <Product.Counter.Text>{value?.quantity}</Product.Counter.Text>
                      <Product.Counter.Wrapper><Product.Counter.Increment /></Product.Counter.Wrapper>
                    </Product.Counter>
                  </Product>
                )
              })
            }
        </Products>
    </Container>
  )
}
