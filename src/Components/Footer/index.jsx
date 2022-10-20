import React from 'react'
import { Container, Copyright, GreenArea, Wrapper } from './style'
import payments from '../../assets/images/payment.png'

export const Footer = () => {
  return (
    <Container>
        <GreenArea>
          <GreenArea.LogoWrapper>
            <GreenArea.Logo />
            <GreenArea.Greenshop />
          </GreenArea.LogoWrapper>
          <GreenArea.LogoWrapper>
            <GreenArea.Location />
            <GreenArea.Title>70 West Buckingham Ave. Farmingdale, NY 11735</GreenArea.Title>
          </GreenArea.LogoWrapper>
          <GreenArea.LogoWrapper>
            <GreenArea.Message />
            <GreenArea.Title>contact@greenshop.com</GreenArea.Title>
          </GreenArea.LogoWrapper>
          <GreenArea.LogoWrapper>
            <GreenArea.Call />
            <GreenArea.Title>+88 01911 717 490</GreenArea.Title>
          </GreenArea.LogoWrapper>
        </GreenArea>

        <Wrapper>
          <Wrapper.Column>
            <Wrapper.Title>My Account</Wrapper.Title>
            <Wrapper.Items>
              <Wrapper.Item>
                <Wrapper.Link>My Account</Wrapper.Link>
              </Wrapper.Item>
              <Wrapper.Item>
                <Wrapper.Link>Address</Wrapper.Link>
              </Wrapper.Item>
              <Wrapper.Item>
                <Wrapper.Link>Wishlist</Wrapper.Link>
              </Wrapper.Item>
            </Wrapper.Items>
          </Wrapper.Column>
          <Wrapper.Column>
            <Wrapper.Title>Categories</Wrapper.Title>
            <Wrapper.Items>
              <Wrapper.Item>
                <Wrapper.Link>House Plants</Wrapper.Link>
              </Wrapper.Item>
              <Wrapper.Item>
                <Wrapper.Link>Potter Plants</Wrapper.Link>
              </Wrapper.Item>
              <Wrapper.Item>
                <Wrapper.Link>Seeds</Wrapper.Link>
              </Wrapper.Item>
              <Wrapper.Item>
                <Wrapper.Link>Small Plants</Wrapper.Link>
              </Wrapper.Item>
              <Wrapper.Item>
                <Wrapper.Link>Accessories</Wrapper.Link>
              </Wrapper.Item>
            </Wrapper.Items>
          </Wrapper.Column>
          <Wrapper.Column>
            <Wrapper.Title>Social Media</Wrapper.Title>
            <Wrapper.Socials>
              <Wrapper.Social>
                <Wrapper.Facebook />
              </Wrapper.Social>
              <Wrapper.Social>
                <Wrapper.Instagram />
              </Wrapper.Social>
              <Wrapper.Social>
                <Wrapper.Twitter />
              </Wrapper.Social>
              <Wrapper.Social>
                <Wrapper.Linkedin />
              </Wrapper.Social>
              <Wrapper.Social>
                <Wrapper.Union />
              </Wrapper.Social>
            </Wrapper.Socials>
            <Wrapper.Title>We accept</Wrapper.Title>
            <Wrapper.Payments src={payments} />
          </Wrapper.Column>
        </Wrapper>

        <Copyright>© 2022 GreenShop. All Rights Reserved.</Copyright>
    </Container>
  )
}
