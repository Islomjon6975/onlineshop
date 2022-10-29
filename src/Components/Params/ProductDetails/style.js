import styled, {css} from "styled-components";
import { SearchOutlined } from '@ant-design/icons';
import {ReactComponent as stargold} from '../../../assets/icons/star-gold.svg' 
import {ReactComponent as stargrey} from '../../../assets/icons/star-grey.svg' 
import {ReactComponent as plus} from '../../../assets/icons/plus.svg' 
import {ReactComponent as minus} from '../../../assets/icons/minus.svg' 
import {ReactComponent as heartgreen} from '../../../assets/icons/heart-green.svg' 
import {ReactComponent as redHeart} from '../../../assets/icons/red-heart.svg'

const common = css`
    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`

const Container = styled.div`
    width: 100%;
    margin-bottom: 100px;
    margin-top: 30px;

    @media (max-width: 500px) {
        padding: 0 15px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 53px;
    margin-top: 43px;
    @media (max-width: 1100px) {
        grid-column-gap: 40px;
    }

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
        grid-row-gap: 40px;

    }
`

const Left = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 46px;

    @media (max-width: 1100px) {
        grid-gap: 20px;
    }

    @media (max-width: 1100px) {
        grid-gap: 20px;
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    @media (max-width: 500px) {
        height: auto;

    }

`


Left.ImgSet = styled.div`
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(4, 100px);
  grid-row-gap: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
    grid-column-gap: 16px;
   }

   @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
    grid-column-gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
   }

   @media (max-width: 500px) {
        /* width: 500px; */
        height: 150px;
        /* grid-template-columns: repeat(4, 100px); */
    }
`;

Left.ImgWrapper = styled.div`
   @media (max-width: 500px) {
        max-width: 500px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
    }
`

Left.ImgSet.Img = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 1s;
  :hover {
    transform: scale(1.2);
  }
`;

Left.MainImgLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  max-width: 704px;
  max-height: 704px;
  width: 100%;
  height: 100%;
`;

Left.MainLeft = styled.img`
    height: 80%;
    mix-blend-mode: multiply;

    @media (max-width: 1100px) {
        grid-gap: 20px;
        width: 90%;
        max-height: 300px;
    }


    @media (max-width: 850px) {
        width: 60%;
        height: auto;
    }
`;

Left.Search = styled(SearchOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 5;
  :hover {
    color: #46a358;
  }
  [data-icon] {
    width: 18px;
    height: 18px;
  }
`;

const Right = styled.div`
    width: 100%;
`

Right.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 21px;

    @media (max-width: 500px) {
        font-size: 24px;
    }
`

Right.Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 13px;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`

Right.Price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 16px;
    color: #46A358;

    @media (max-width: 500px) {
        font-size: 21px;
    }
`

Right.StarGold = styled(stargold)``
Right.StarGrey = styled(stargrey)``

Right.Reviews = styled.div`
    ${common}
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
    display: flex;
    align-items: center;
    gap: 7px;
    
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

Right.ReviewsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

Right.Subtitle = styled.div`
    ${common}
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
    margin: 15px 0px 10px 0px;
`

Right.Description = styled.div`
    ${common}
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
`

Right.Sizes = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

Right.Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #EAEAEA;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #727272;


    
`

Right.Radio = styled.input`
    :checked+.label{
        border: 1px solid #46A358;
        color: #46A358;
    }
`

Right.Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 23px;
    margin-bottom: 26px;
    gap: 26px;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 800px) {
        flex-direction: row;
        align-items: flex-start;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

Right.IncDesWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
`

Right.IncDec = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 38px;
    background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
    border-radius: 29px;

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
`

Right.Plus = styled(plus)``
Right.Minus = styled(minus)``

Right.Counter = styled.div`
    ${common}
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 10px;
    color: #3D3D3D;
`

Right.Buttons.Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

Right.LikeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #46A358;
    border-radius: 6px;

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
`

Right.HeartGreen = styled(heartgreen)`

`

Right.RedHeart = styled(redHeart)`
    width: 30px;
    height: 30px;
`


Right.Contents = styled.div`
    ${common}
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`

Right.Contents.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #A5A5A5;
`

Right.Contents.Subtitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #727272;
`

export {Container, Wrapper, Left, Right}