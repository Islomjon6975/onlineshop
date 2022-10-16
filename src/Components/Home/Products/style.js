import styled from "styled-components";
import { Slider } from 'antd';

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    margin-top: 46px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 312px 1fr;
    grid-column-gap: 50px;
`

const Sidebar = styled.div`
    width: 312px;
    height: 774px;
`

Sidebar.Wrapper = styled.div`
    background: #FBFBFB;
    padding: 14px 18px;
`

Sidebar.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3D3D3D;
`

Sidebar.Items = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    gap: 1px !important;
    padding: 0px 6px 0px 12px;
`

Sidebar.Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Sidebar.Text = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;
    color: ${({color}) => color};
    margin-bottom: 0px !important;
`

Sidebar.Number = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;
    text-align: right;
    color: ${({color}) => color};
`

Sidebar.Slider = styled(Slider)`
    margin: 20px 0px 15px 0px;
    .ant-slider-handle{
        background: #46A358;
        border: 2px solid #FFFFFF;
    }

    .ant-slider-track {
        background-color: #46A358;
    }

    .ant-slider-rail {
        background: #D7E9DA;
    }

    .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
        border-color: #FFFFFF !important;
    }

    .ant-slider:hover .ant-slider-track {
        background-color: #46A358 !important;
    }

    .ant-slider-handle {
        width: 15px;
        height: 15px;
    }

`

Sidebar.Price = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;

    span {
        color: #46A358;
        font-weight: 700;
    }
`

Sidebar.SuperSale = styled.img`

`

const Main = styled.div`

`

Main.Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Main.Navbar.Items = styled.ul`
    display: flex;
    align-items: center;
    gap: 34px;
`

Main.Navbar.Item = styled.li`
    font-style: normal;
    font-weight: ${({weight}) => weight};
    font-size: 15px;
    line-height: 16px;
    color: ${({color}) => color};
    list-style-type: none;
    border-bottom: ${({border}) => border};
    padding-bottom: 7px;
`

Main.Navbar.Sort = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
`

Main.Navbar.Select = styled.select`
    outline: none;
    border: none;
    margin-left: 5px;
    background: none;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`

Main.Navbar.Option = styled.option`
    
`

Main.Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 33px;
    grid-row-gap: 70px;
    margin-top: 15px;

    @media (max-width: 1700px) {
        grid-row-gap: 50px;
        grid-column-gap: 27px;
    }

    @media (max-width: 1520px) {
        grid-template-columns: repeat(3, 1fr);
    }

    /* @media (max-width: 1600px) {
        grid-row-gap: 50px;
        grid-column-gap: 27px;
    }

    @media (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 50px;
        grid-column-gap: 22px;
    }

    @media (max-width: 1250px) {
        grid-row-gap: 40px;
        grid-column-gap: 20px;
    } */
`

export {Container, Wrapper, Sidebar, Main}