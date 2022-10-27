import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logout} from '../../assets/icons/myprofile-logout.svg'

const Container = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 310px 1fr;
    grid-gap: 32px;
    margin-top: 60px;
    margin-bottom: 150px;
`

Container.Add = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 10;
    width: 100px;
    height: 35px;
    border: 1px solid #46A358;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #46A358;
    transition: transform .4s ease-in-out;

    :active {
        transform: scale(0.97);
    }
`

const Sidebar = styled.div`
    /* border: 1px solid black; */
    background: #FBFBFB;
`

Sidebar.Container = styled.div`
    width: 100%;
    padding: 17px 18px;

`

Sidebar.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 10px;
`

Sidebar.Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
`

Sidebar.Navlink = styled(NavLink)`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 45px;
    color: #46A358;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: ${({active}) => active ? '600' : '400'};
    color: ${({active}) => active ? 'green' : '#3D3D3D'};

`

Sidebar.Logout = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-top: 0.3px solid rgba(70, 163, 88, 0.5);
    margin-top: 32px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #727272;
    padding: 0 18px;
`

Sidebar.Logout.Icon = styled(logout)``

const OutletWrapper = styled.div`
    /* background-color: crimson; */
    /* border: 1px solid black; */
`

export {Container, Sidebar, OutletWrapper}