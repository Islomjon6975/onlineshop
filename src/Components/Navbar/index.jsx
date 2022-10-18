import { Drawer } from 'antd';
import React, { useState } from 'react'
import { usePlugins } from '../../context/Plugins';
import { useProducts } from '../../context/Products';
import { Cart } from '../Cart';
import { Button } from '../Generic/Button'
import { Basket, Container, Greenshop, Logo, Logout, Search, Wrapper, Hamburger, DrawerBar } from './style'

export const Navbar = () => {
    const [state, dispatch] = useProducts()

  return (
    <Container>
        <Wrapper>
        <DrawerBar placement="right" onClose={() => dispatch({type: 'closeHumburger'})} open={state.humburger}>
            {/* <DrawerBar.Close onClick={onClose} /> */}
            <p className='link'>Home</p>
            <p className='link'>Shop</p>
            <Button onClick={() => dispatch({type: 'openModal'})} type="primary" width='100px' icon={<Logout />}>
                            Login
            </Button>
        </DrawerBar>
            <Wrapper.Wrap>
                <Wrapper.Left>
                    <Logo />
                    <Greenshop />
                </Wrapper.Left>
            </Wrapper.Wrap>
            <Wrapper.Wrap>
                <Wrapper.Ul>
                    <Wrapper.Li>Home</Wrapper.Li>
                    <Wrapper.Li>Shop</Wrapper.Li>
                </Wrapper.Ul>
            </Wrapper.Wrap>
            <Wrapper.Wrap>
                <Wrapper.Right>
                    <Search />
                    <Wrapper.BasketWrapper>
                        <Basket onClick={() => dispatch({type: 'openCart'})} />
                        <Wrapper.Counter>{state?.cart?.length}</Wrapper.Counter>
                    </Wrapper.BasketWrapper>
                    
                    <Wrapper.ButtonWrapper>
                        <Button onClick={() => dispatch({type: 'openModal'})} type="primary" width='100px' icon={<Logout />}>
                            Login
                        </Button>
                    </Wrapper.ButtonWrapper>
                    <Hamburger onClick={() => dispatch({type: 'openHumburger'})}  />
                </Wrapper.Right>
            </Wrapper.Wrap>
        </Wrapper>
        <Cart />
    </Container>
  )
}
