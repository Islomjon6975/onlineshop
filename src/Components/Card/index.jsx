import React, { useState } from 'react'
import { Container } from './style'
import flower1 from '../../assets/images/flower1.png'
import { useProducts } from '../../context/Products'

export const Card = ({
    id,
    title,
    img,
    price,
    salePrice,
    discount,
    like,
    quantity
}) => {
    const [change, setChange] = useState(false)
    const [state, dispatch] = useProducts()
    console.log(state, 'state')
  return (
    <Container  onMouseOver = {() => setChange(true)} onMouseLeave = {() => setChange(false)}>
        <Container.ImageWrapper>
            <Container.ImageWrapper.Image src={flower1} />
            {discount > 0 && <Container.Off>{discount}% OFF</Container.Off>}
            <Container.Icons hover={change}>
                <Container.Icons.Wrapper><Container.Icons.Basket /></Container.Icons.Wrapper>
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
