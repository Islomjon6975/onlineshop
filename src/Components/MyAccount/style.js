import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logout} from '../../assets/icons/myprofile-logout.svg'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 310px 1fr;
    grid-gap: 32px;
    margin-top: 60px;
    margin-bottom: 150px;
`

const Sidebar = styled.div`
    border: 1px solid black;
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
    height: 100px;
    background-color: crimson;
`

export {Container, Sidebar, OutletWrapper}