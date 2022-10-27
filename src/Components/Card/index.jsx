import React, { useState } from 'react'
import { Container } from './style'
import flower1 from '../../assets/images/flower1.png'
import { useProducts } from '../../context/Products'
import { message, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Card = ({
    id,
    title,
    img,
    price,
    salePrice,
    discount,
    like,
    quantity,
    addtocart,
    onClick,
}) => {
    const [change, setChange] = useState(false)
    const [state, dispatch] = useProducts()
    const token = JSON.parse(localStorage.getItem('greenshopToken'))
    const navigate = useNavigate()


    const success = (title ) => {
      message.success(`${title} has been added to Cart`);
    };

    const error = (title ) => {
      message.error(`${title} has been deleted from Cart`);
    };

  return (
    <Container onClick={onClick}  onMouseOver = {() => setChange(true)} onMouseLeave = {() => setChange(false)}>
      
        <Container.ImageWrapper> 
          <Container.Blur blur={addtocart}>
          </Container.Blur>
            <Container.ImageWrapper.Image src={flower1} />
            {discount > 0 && <Container.Off>{discount}% OFF</Container.Off>}
            <Container.Icons hover={change}>
                {
                  addtocart ? <Container.Icons.Wrapper onClick={() => error(title)}><Container.Icons.Trash onClick={() => dispatch({type: 'cancelcart', payload: {id: id}})} /></Container.Icons.Wrapper> : <Container.Icons.Wrapper onClick={token ? () => success(title) : null}><Container.Icons.Basket onClick={token ? () => dispatch({type: 'addtocart', payload: {id: id}}) : () => dispatch({type: "openModal"})} /></Container.Icons.Wrapper>
                }
                <Container.Icons.Wrapper>
                    {
                        like ? <Container.Icons.RedHeart onClick={() => dispatch({type: 'redHeart', payload: {id: id}})} /> : <Container.Icons.Heart onClick={() => dispatch({type: 'heart', payload: {id: id}})} />
                    }
                </Container.Icons.Wrapper> 
                <Container.Icons.Wrapper onClick={() => localStorage.getItem('greenshopToken') ? navigate(`/shop/:${id}`) : dispatch({type: 'openModal'})}><Container.Icons.Search /></Container.Icons.Wrapper>
            </Container.Icons>
        </Container.ImageWrapper>
        <Container.Title>{title}</Container.Title>
        <Container.Price>
            ${price}.00 
            <Container.OriginalPrice>{salePrice > 0 && '$' + salePrice + '.00'}</Container.OriginalPrice>
        </Container.Price>
    </Container>
  )
}
