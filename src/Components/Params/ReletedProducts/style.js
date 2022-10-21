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

const Products = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;
    margin-top: 40px;
`

Products.Product = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

Products.ImageWrapper = styled.div`
    width: 100%;
    max-width: 219px;
    height: 243px;
    display: flex;
    justify-content: center;
    align-items: center;
`

Products.Image = styled.img`
    width: 100%;
    max-width: 190px;

`

Products.Details = styled.div`
    padding: 0px 0px 10px 0px;
`

Products.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
`

Products.Price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #46A358;
    margin-top: 5px;
`

export {Container, Nav, Products}