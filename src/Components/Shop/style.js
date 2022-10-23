import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 100px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
`

const Wrapper = styled.div`
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    margin: auto;
`

const Product = styled.div`
    width: 300px;
    border: 1px solid black;
    padding-bottom: 15px;
`

Product.ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

Product.Image = styled.img`
    width: 90%;
    
`

Product.Details = styled.div`

`

Product.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 6px;
`

Product.Price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #46A358;
`

export {Container, Title, Wrapper, Product}