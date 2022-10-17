import styled from "styled-components";
import {ReactComponent as basket} from '../../assets/icons/basket.svg'
import {ReactComponent as heart} from '../../assets/icons/heart.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as settings} from '../../assets/icons/settings.svg'

const Container = styled.div`
    max-width: 350px;
    /* width: 258px; */
    min-width: 258px;

    :hover{
        border-top: 2px solid #46A358;
    }


    @media (max-width: 900px) {
        max-width: 300px;
        min-width: 238px;
    }

    @media (max-width: 600px) {
        max-width: 161px;
        min-width: 161px;

    }
`

Container.ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FBFBFB;

    @media (max-width: 900px) {
        height: 250px;
    }

    @media (max-width: 600px) {
        background: linear-gradient(143.28deg, #F4F4F4 -12%, #FAFAFA 106.59%);
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid #999;
    }
`

Container.ImageWrapper.Image = styled.img`
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 600px) {
        width: 132px;
        height: 132px;
    }
`

Container.Off = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 14px;
    min-width: 80px;
    height: 29px;
    background: #46A358;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
`

Container.Icons = styled.div`
    position: absolute;
    bottom: 7px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 10px;
    display: ${({hover}) => hover ? 'flex' : 'none'};
`

Container.Icons.Wrapper = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 4px;
`

Container.Icons.Basket = styled(basket)``
Container.Icons.Heart = styled(heart)``
Container.Icons.Search = styled(search)``

Container.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin: 12px 0px 6px 0px;
`

Container.Price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #46A358;
`

Container.OriginalPrice = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #A5A5A5;
    text-decoration: line-through;
    display: inline-block;
    margin-left: 4px;
`

export {Container}