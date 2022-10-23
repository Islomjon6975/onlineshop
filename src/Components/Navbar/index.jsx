import React from 'react'
import { useProducts } from '../../context/Products';
import { navbar } from '../../utils/navbar';
import { Cart } from '../Cart';
import { Button } from '../Generic/Button'
import { Basket, Container, Greenshop, Logo, Logout, Search, Wrapper, Hamburger, DrawerBar, OutletWrapper } from './style'
import {useNavigate} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import { Login } from '../Login';
const active = (url) => {
    return window.location.pathname.includes(url)
}
export const Navbar = () => {
    const [state, dispatch] = useProducts()
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('greenshopToken'))


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
                                return(
                                    !item.isPrivate && <Wrapper.Li active={active(item.path)} exact key={item.id} to={item.path}>{item.title}</Wrapper.Li>
                                )
                        })}
                        {navbar.map((item) => {
                                return(
                                item.isPrivate &&  <Wrapper.Li  active={active(item.path)} onClick={!token ? ()=> dispatch({type: 'openModal'}) : 'none'}  exact key={item.id} to={token && item.path}>{item.title}</Wrapper.Li>
                                )
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
                            <Button onClick={() => dispatch({type: 'openModal'})} type="primary" width={token ? 'fit-content' : '100px'} icon={<Logout />}>
                                {token ? token.username : 'Login' }
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
