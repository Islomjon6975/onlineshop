import React, { useState } from 'react'
import { Container } from './style'
import flower1 from '../../assets/images/flower1.png'

export const Card = () => {
    const [state, setState] = useState(false)
  return (
    <Container  onMouseOver = {() => setState(true)} onMouseLeave = {() => setState(false)}>
        <Container.ImageWrapper>
            <Container.ImageWrapper.Image src={flower1} />
            <Container.Off>13% OFF</Container.Off>
            <Container.Icons hover={state}>
                <Container.Icons.Wrapper><Container.Icons.Basket /></Container.Icons.Wrapper>
                <Container.Icons.Wrapper><Container.Icons.Heart /></Container.Icons.Wrapper>
                <Container.Icons.Wrapper><Container.Icons.Search /></Container.Icons.Wrapper>
            </Container.Icons>
        </Container.ImageWrapper>
        <Container.Title>Barberton Daisy</Container.Title>
        <Container.Price>
            $119.00 
            <Container.OriginalPrice>$229.00</Container.OriginalPrice>
        </Container.Price>
    </Container>
  )
}
