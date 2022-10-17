import { Drawer } from "antd";
import styled from "styled-components";
import {ReactComponent as plus} from '../../assets/icons/plus.svg'
import {ReactComponent as minus} from '../../assets/icons/minus.svg'

const Container = styled(Drawer)`

`

const Products = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 16px;
`

const Product = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70px 1fr 120px;
    grid-column-gap: 20px;
    padding-bottom: 16px;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`

Product.ImageWrapper = styled.div`
    width: 70px;
    height: 70px;
    overflow: hidden;
    background: red;
`

Product.ImageWrapper.Image = styled.img`
    width: 100%;
    height: 100%;
`

Product.Content = styled.div`
    display: flex;
    flex-direction: column;
`

Product.Content.Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
`

Product.Content.Sku = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    margin-top: 6px;
`

Product.Content.Price = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #727272;
    margin-top: 16px;
`

Product.Counter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`

Product.Counter.Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: #3D3D3D;
    width: 30px;
`

Product.Counter.Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    /* background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%); */
    background: #46A358;
    border-radius: 50%;
    transition: transform .2s ease-in-out;

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
`

Product.Counter.Decrement = styled(minus)``
Product.Counter.Increment = styled(plus)``

export {Container, Products, Product}