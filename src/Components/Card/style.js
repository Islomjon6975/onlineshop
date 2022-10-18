import styled from "styled-components";
import {ReactComponent as basket} from '../../assets/icons/basket.svg'
import {ReactComponent as heart} from '../../assets/icons/heart.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as trash} from '../../assets/icons/trash.svg'
import {ReactComponent as redHeart} from '../../assets/icons/red-heart.svg'


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

    @media (max-width: 800px) {
        max-width: 250px;
        min-width: 200px;
    }

    @media (max-width: 440px) {
        min-width: 135px;
        width: fit-content;
        width: fit-content;
    }

    /* @media (max-width: 600px) {
        max-width: 161px;
        min-width: 161px;
    } */
`

Container.ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FBFBFB;
    opacity: ${({blur}) => blur && '0.5'};

    @media (max-width: 900px) {
        height: 250px;
    }

    @media (max-width: 800px) {
        height: 230px;
    }

    @media (max-width: 665px) {
        height: 230px;
    }

    @media (max-width: 440px) {
        height: fit-content;
        width: fit-content;
    }

    @media (max-width: 600px) {
        background: linear-gradient(143.28deg, #F4F4F4 -12%, #FAFAFA 106.59%);
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid #999;
    }

    
`

Container.Blur = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index:2;
    background-color: ${({blur}) => blur ? 'rgba(0, 0, 0, 0.1)' : 'none'} ;
`

Container.ImageWrapper.Image = styled.img`
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 600px) {
        min-width: 132px;
        min-height: 132px;
    }

    @media (max-width: 440px) {
        max-height: 180px;
        height: 100%;
        max-width: 200px;
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

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

Container.Icons = styled.div`
    position: absolute;
    bottom: 7px;
    left: 50%;
    z-index: 11;
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
Container.Icons.RedHeart = styled(redHeart)``
Container.Icons.Trash = styled(trash)``

Container.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin: 12px 0px 6px 0px;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

Container.Price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #46A358;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
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

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

export {Container}