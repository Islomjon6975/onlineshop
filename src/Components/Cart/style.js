import { Drawer } from "antd";
import styled from "styled-components";
import {ReactComponent as plus} from '../../assets/icons/plus.svg'
import {ReactComponent as minus} from '../../assets/icons/minus.svg'
import {ReactComponent as trash} from '../../assets/icons/trash.svg'

const Container = styled(Drawer)`
    
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

Wrapper.NoData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3D3D3D;
    text-transform: capitalize;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

`

const Products = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 16px;
    overflow: auto;

    @media (max-width: 500px) {
    }
`

const Product = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70px 1fr 120px 50px;
    grid-column-gap: 20px;
    padding-bottom: 16px;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    
    @media (max-width: 500px) {
        grid-template-columns: 70px 1fr 80px 50px;
        grid-column-gap: 10px;

    }
`

Product.ImageWrapper = styled.div`
    width: 70px;
    height: 70px;
    overflow: hidden;
`

Product.ImageWrapper.Image = styled.img`
    width: 100%;
    height: 100%;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
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

    @media (max-width: 500px) {
        font-size: 14px;
    }

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

Product.Content.Sku = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    margin-top: 6px;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

Product.Content.Price = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #727272;
    margin-top: 16px;
    
    @media (max-width: 500px) {
        font-size: 14px;
    }

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

Product.Counter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 500px) {
        gap: 6px;
    }
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

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

    @media (max-width: 500px) {
        font-size: 16px;
    }
`

Product.Counter.Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    background: #46A358;
    border-radius: 50%;
    transition: transform .2s ease-in-out;

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }

    @media (max-width: 500px) {
        width: 25px;
        height: 25px;
    }
`

Product.Counter.Decrement = styled(minus)``
Product.Counter.Increment = styled(plus)``


Product.Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid #C4C4C4;
    border-radius: 50%;
    justify-self: center;
    align-self: center;

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }

    @media (max-width: 500px) {
        width: 30px;
        height: 30px;
    }
`
Product.Trash = styled(trash)`
    
`

const Footer = styled.div`
    width: 100%;
    margin-top: 50px;
`

Footer.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3D3D3D;
    padding-bottom: 11px;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    margin-bottom: 26px;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

    @media (max-width: 500px) {
        font-weight: 700;
        font-size: 16px;
    }
`

Footer.Wrapper = styled.div`
    width: 100% ;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Footer.Total = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;

     -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

    @media (max-width: 500px) {
        font-weight: 700;
        font-size: 14px;
    }
`

Footer.TotalPrice = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #46A358;

    @media (max-width: 500px) {
        font-size: 14px;
    }

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

Footer.Buttons = styled.div`
    margin-top: 29px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`



export {Container, Wrapper, Products, Product, Footer}