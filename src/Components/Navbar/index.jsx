import React from 'react'
import { useProducts } from '../../context/Products';
import { navbar } from '../../utils/navbar';
import { Cart } from '../Cart';
import { Button } from '../Generic/Button'
import { Basket, Container, Greenshop, Logo, Logout, Search, Wrapper, Hamburger, DrawerBar, OutletWrapper } from './style'
import {useNavigate} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import { Login } from '../Login';
export const Navbar = () => {
    const [state, dispatch] = useProducts()
    const navigate = useNavigate()
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
                    <Wrapper.Left onClick={() => navigate('/home')}>
                        <Logo />
                        <Greenshop />
                    </Wrapper.Left>
                </Wrapper.Wrap>
                <Wrapper.Wrap>
                    <Wrapper.Ul>
                        {navbar.map((item) => {
                            if(!item.isPrivate) {
                                return(
                                    <Wrapper.Li key={item.id} to={item.path}>{item.title}</Wrapper.Li>
                                )
                            } else {
                                if(!localStorage.getItem('greenshopTokent')) {
                                    navigate('/login')
                                } else {
                                    <Wrapper.Li key={item.id} to={item.path}>{item.title}</Wrapper.Li>
                                }
                            }
                        })}
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
        <OutletWrapper >
            <Outlet />
        </OutletWrapper>
        <Cart />
        <Login />

    </Container>
  )
}
