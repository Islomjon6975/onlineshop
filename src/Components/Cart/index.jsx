import React, { useState } from 'react'
import { Container, Footer, Product, Products, Wrapper } from './style';
import flower1 from '../../assets/images/flower1.png'
import { useProducts } from '../../context/Products';
import { Button } from '../Generic/Button';

export const Cart = () => {
    // const [plugin, setPlugin] = usePlugins();
    const [state, dispatch] = useProducts();
  return (
    <Container title="Products" width={500} placement="right" onClose={() => dispatch({type: 'closeCart'})} open={state.basket}>
        <Wrapper>
          <Products>
              { state?.cart?.length > 0 ? (
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
                        <Product.Counter.Wrapper onClick={() => dispatch({type: 'decrement', payload: {id: value?.id}})} ><Product.Counter.Decrement /></Product.Counter.Wrapper>
                        <Product.Counter.Text>{value?.quantity}</Product.Counter.Text>
                        <Product.Counter.Wrapper  onClick={() => dispatch({type: 'increment', payload: {id: value?.id}})}><Product.Counter.Increment /></Product.Counter.Wrapper>
                      </Product.Counter>
                      <Product.Icon onClick = {() => dispatch({type: 'cancelcart', payload: {id: value?.id}})}><Product.Trash  /></Product.Icon>
                    </Product>
                  )
                })
              ) : <Wrapper.NoData>No Products yet</Wrapper.NoData> }
               
          </Products>
          <Footer>
              <Footer.Title>Cart Totals</Footer.Title>
              <Footer.Wrapper>
                  <Footer.Total>Total:</Footer.Total>
                  <Footer.TotalPrice>${state.totalPrice}.00</Footer.TotalPrice>
              </Footer.Wrapper>
              <Footer.Buttons>
                <Button height='40px'>Proceed To Checkout</Button>
                <Button height='40px' onClick={() => dispatch({type: 'closeCart'})}>Continue Shopping</Button>
              </Footer.Buttons>
              
          </Footer>
        </Wrapper>
    </Container>
  )
}
