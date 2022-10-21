import React, { useState } from 'react'
import { Container, Nav, Products } from './style'
import flower1 from '../../../assets/images/flower1.png'
import flower2 from '../../../assets/images/flower2.png'
import flower3 from '../../../assets/images/flower3.png'
import flower4 from '../../../assets/images/flower4.png'
import flower5 from '../../../assets/images/flower5.png'

export const ReletedProducts = () => {
    const [color, setColor] = useState('description')
  return (
    <Container>
        <Nav>
            <Nav.Item onClick={() => setColor('description')} color={color === 'description' && '#46A358'}>Product Description</Nav.Item>
        </Nav>
        <Products>
            <Products.Product>
                <Products.ImageWrapper>
                    <Products.Image src={flower1} />
                </Products.ImageWrapper>
                <Products.Details>
                    <Products.Title>Beach Spider Lily</Products.Title>
                    <Products.Price>$129.00</Products.Price>
                </Products.Details>
            </Products.Product>
            <Products.Product>
                <Products.ImageWrapper>
                    <Products.Image src={flower2} />
                </Products.ImageWrapper>
                <Products.Details>
                    <Products.Title>Beach Spider Lily</Products.Title>
                    <Products.Price>$129.00</Products.Price>
                </Products.Details>
            </Products.Product>
            <Products.Product>
                <Products.ImageWrapper>
                    <Products.Image src={flower3} />
                </Products.ImageWrapper>
                <Products.Details>
                    <Products.Title>Beach Spider Lily</Products.Title>
                    <Products.Price>$129.00</Products.Price>
                </Products.Details>
            </Products.Product>
            <Products.Product>
                <Products.ImageWrapper>
                    <Products.Image src={flower4} />
                </Products.ImageWrapper>
                <Products.Details>
                    <Products.Title>Beach Spider Lily</Products.Title>
                    <Products.Price>$129.00</Products.Price>
                </Products.Details>
            </Products.Product>
            <Products.Product>
                <Products.ImageWrapper>
                    <Products.Image src={flower5} />
                </Products.ImageWrapper>
                <Products.Details>
                    <Products.Title>Beach Spider Lily</Products.Title>
                    <Products.Price>$129.00</Products.Price>
                </Products.Details>
            </Products.Product>
        </Products>
    </Container>
  )
}
