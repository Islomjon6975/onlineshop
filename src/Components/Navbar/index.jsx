import React, { useState } from 'react'
import { Button } from '../Generic/Button'
import { Basket, Container, Greenshop, Logo, Logout, Search, Wrapper, Hamburger, DrawerBar } from './style'

export const Navbar = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

  return (
    <Container>
        <Wrapper>
        <DrawerBar placement="right" onClose={onClose} open={open}>
            {/* <DrawerBar.Close onClick={onClose} /> */}
            <p className='link'>Home</p>
            <p className='link'>Shop</p>
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
                        <Basket />
                        <Wrapper.Counter>0</Wrapper.Counter>
                    </Wrapper.BasketWrapper>
                    
                    <Wrapper.ButtonWrapper>
                        <Button type="primary" width='100px' icon={<Logout />}>
                            Login
                        </Button>
                    </Wrapper.ButtonWrapper>
                    <Hamburger onClick={showDrawer} />
                </Wrapper.Right>
            </Wrapper.Wrap>
        </Wrapper>
    </Container>
  )
}
