import styled from "styled-components";
import {ReactComponent as trash} from '../../../assets/icons/trash.svg'
import {ReactComponent as edit} from '../../../assets/icons/edit.svg'

export const Container = styled.div`
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
`

Wrapper.Navbar = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    padding-bottom: 11px;
    margin-bottom: 11px;
`

Wrapper.Navbar.Item = styled.div`

`

Wrapper.Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 400px;
    overflow-y: auto;
`

Wrapper.Product = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
    background: #FBFBFB;
    height: 80px;
`

Wrapper.Product.Item = styled.div`
    display: flex;
    align-items: center;
`

Wrapper.Product.Item.ImageWrapper = styled.div`
    width: 70px;
    height: 70px;
    mix-blend-mode: multiply;
`

Wrapper.Product.Item.Image = styled.img`
    width: 100%;
    height: 100%;
`

Wrapper.Product.Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

Wrapper.Product.Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 8px;
`

Wrapper.Product.Sku = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
`

Wrapper.Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

Wrapper.Trash = styled(trash)`
    :active {
        transform: scale(0.97);
    }
`
Wrapper.Edit = styled(edit)`
    :active {
        transform: scale(0.97);
    }
`