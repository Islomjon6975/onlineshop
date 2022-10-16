import styled from "styled-components";

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    margin-top: 46px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 310px 1fr;
    grid-column-gap: 50px;
`

const Sidebar = styled.div`
    width: 310px;
    height: 774px;
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
    color: #46A358;
    margin-bottom: 0px !important;
`

Sidebar.Number = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 40px;
    text-align: right;
    color: #46A358;
`

const Main = styled.div`

`

export {Container, Wrapper, Sidebar, Main}