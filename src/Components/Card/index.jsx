import React, { useState } from 'react'
import { Container } from './style'
import flower1 from '../../assets/images/flower1.png'
import { useProducts } from '../../context/Products'
import { notification } from 'antd';

export const Card = ({
    id,
    title,
    img,
    price,
    salePrice,
    discount,
    like,
    quantity,
    addtocart
}) => {
    const [change, setChange] = useState(false)
    const [state, dispatch] = useProducts()


    const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

  return (
    <Container  onMouseOver = {() => setChange(true)} onMouseLeave = {() => setChange(false)}>
      
        <Container.ImageWrapper> 
          <Container.Blur blur={addtocart}>
          </Container.Blur>
            <Container.ImageWrapper.Image src={flower1} />
            {discount > 0 && <Container.Off>{discount}% OFF</Container.Off>}
            <Container.Icons hover={change}>
                {
                  addtocart ? <Container.Icons.Wrapper><Container.Icons.Trash onClick={() => dispatch({type: 'cancelcart', payload: {id: id}})} /></Container.Icons.Wrapper> : <Container.Icons.Wrapper onClick={openNotification}><Container.Icons.Basket onClick={() => dispatch({type: 'addtocart', payload: {id: id}})} /></Container.Icons.Wrapper>
                }
                <Container.Icons.Wrapper>
                    {
                        like ? <Container.Icons.RedHeart onClick={() => dispatch({type: 'redHeart', payload: {id: id}})} /> : <Container.Icons.Heart onClick={() => dispatch({type: 'heart', payload: {id: id}})} />
                    }
                </Container.Icons.Wrapper> 
                <Container.Icons.Wrapper><Container.Icons.Search /></Container.Icons.Wrapper>
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
