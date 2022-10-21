import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin-bottom: 100px;
`

const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    margin-bottom: 18px;
`

Nav.Item = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 16px;
    color: ${({color}) => color ? color : ' #3D3D3D'};
    padding-bottom: 12px;
    font-weight: ${({color}) => color ? '600' : '400'};
    border-bottom: 1.5px solid ${({color}) => color ? color : 'none'};
`

const Descriptions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
`

Descriptions.Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
`

Descriptions.Subtitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #3D3D3D;
`

export {Container, Nav, Descriptions}