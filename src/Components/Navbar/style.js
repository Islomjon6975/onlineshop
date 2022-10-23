import styled, {css} from "styled-components";
import {ReactComponent as logo} from '../../assets/icons/logo.svg'
import {ReactComponent as greenshop} from '../../assets/icons/greenshop.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as basket} from '../../assets/icons/basket.svg'
import {ReactComponent as hamburger} from '../../assets/icons/hamburger-menu.svg'
import {ReactComponent as logout} from '../../assets/icons/logout.svg'
import {ReactComponent as close} from '../../assets/icons/close.svg'
import { Drawer } from "antd";
import {NavLink} from 'react-router-dom'

const common = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    padding: 17px 0px;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    ${common}

    @media (max-width: 500px) {
        padding: 16px 16px;
        border-bottom: none;
    }
    display: flex;
    flex-direction: column;


`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const Logo = styled(logo)`
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }
`
const Greenshop = styled(greenshop)`
    @media (max-width: 600px) {
        width: 98px;
        height: 11px;
    }
`
const Search = styled(search)`
    transition: transform .3s ease-in-out;
    :active {
        transform: scale(0.97);
    }
`

Wrapper.BasketWrapper = styled.div`
    position: relative;
`

Wrapper.Counter = styled.div`
    ${common}
    position: absolute;
    width: 21px;
    height: 21px;
    right: -8px;
    top: -5px;
    background: #46A358;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
`

const Basket = styled(basket)`
    transition: transform .3s ease-in-out;
    :active {
        transform: scale(0.97);
    }
`
const Hamburger = styled(hamburger)`
    transition: transform .3s ease-in-out;
    :active {
        transform: scale(0.97);
    }
    display: none;
    @media (max-width: 500px) {
        display: block;
    }
`
const Logout = styled(logout)``

Wrapper.Wrap = styled.div`
    ${common}
`

Wrapper.Left = styled.div`
    ${common}
    justify-content: flex-start;
    width: 100%;
    gap: 5.6px;

    @media (max-width: 500px) {
        gap: 5px;

    }
`

Wrapper.Right = styled.div`
    ${common}
    justify-content: flex-end;
    width: 100%;
    gap: 30px;

    @media (max-width: 1000px) {
        gap: 24px;
    }

    @media (max-width: 600px) {
        gap: 20px;
    }

    @media (max-width: 500px) {
        gap: 24px;
    }
`

Wrapper.Ul = styled.ul`
    ${common}
    gap: 50px;

    @media (max-width: 1000px) {
        gap: 24px;
    }

    @media (max-width: 500px) {
        display: none;
    }
`

Wrapper.Li = styled(NavLink)`
    list-style-type: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({active}) => active ? '600' : '400'};
    font-size: 16px;
    line-height: 19px;
    color: ${({active}) => active ? 'green' : '#3D3D3D'};

    :hover {
        color: ${({active}) => active ? 'green' :  '#3D3D3D' } !important;
    }
`

Wrapper.ButtonWrapper = styled.div`
    @media (max-width: 500px) {
        display: none;
    }
`

const DrawerBar = styled(Drawer)`
    ${common}
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: 501px) {
        display: none;
    }

    .ant-drawer-content-wrapper{
        width: 100% !important;
    }

    .ant-drawer-body {
        ${common}
        flex-direction: column;
    }

    .ant-drawer-header-title {
        ${common}
        justify-content: flex-end;
    }

    .ant-drawer-header {
        border-bottom: none;
    }

    .ant-drawer-title {
        display: none;
    }

    .link {
        list-style-type: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #3D3D3D;
    }
`

DrawerBar.Close = styled(close)`
    position: absolute;
    top: 30px;
    right: 30px;
`

const OutletWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export {Container, Wrapper, Logo, Greenshop, Search, Basket, Hamburger, Logout, DrawerBar, OutletWrapper}