import React from 'react'
import { Button } from '../../Generic/Button'
import { Container, Wrapper } from './style'
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import flower1 from '../../../assets/images/header-img1.png'
import flower2 from '../../../assets/images/header-img2.png'

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// // import required modules
import { Pagination, Autoplay } from "swiper";

export const Header = () => {
  return (
    <Container>
         <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
            delay:3500,
            disableOnInteraction: false,
        }}
        
        className="mySwiper"
      >
        <SwiperSlide> 
            <Wrapper>
                <Wrapper.Left>
                    <Wrapper.Subtitle>Welcome to GreenShop</Wrapper.Subtitle>
                    <Wrapper.Title>Let’s Make a <br /> Better <span>Planet</span></Wrapper.Title>
                    <Wrapper.Description>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Wrapper.Description>
                    <Button  width='140px' height='40px'>Shop Now</Button>
                </Wrapper.Left>
                <Wrapper.Right>
                    <Wrapper.ImageWrapper>
                        <Wrapper.ImgOne src={flower1} />
                        <Wrapper.ImgTwo src={flower2} />
                    </Wrapper.ImageWrapper>
                </Wrapper.Right>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
                <Wrapper.Left>
                    <Wrapper.Subtitle>Welcome to GreenShop</Wrapper.Subtitle>
                    <Wrapper.Title>Let’s Make a <br /> Better <span>Planet</span></Wrapper.Title>
                    <Wrapper.Description>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Wrapper.Description>
                    <Button width='140px' height='40px'>Shop Now</Button>
                </Wrapper.Left>
                <Wrapper.Right>
                    <Wrapper.ImageWrapper>
                        <Wrapper.ImgOne src={flower1} />
                        <Wrapper.ImgTwo src={flower2} />
                    </Wrapper.ImageWrapper>
                </Wrapper.Right>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
                <Wrapper.Left>
                    <Wrapper.Subtitle>Welcome to GreenShop</Wrapper.Subtitle>
                    <Wrapper.Title>Let’s Make a <br /> Better <span>Planet</span></Wrapper.Title>
                    <Wrapper.Description>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Wrapper.Description>
                    <Button width='140px' height='40px'>Shop Now</Button>
                </Wrapper.Left>
                <Wrapper.Right>
                    <Wrapper.ImageWrapper>
                        <Wrapper.ImgOne src={flower1} />
                        <Wrapper.ImgTwo src={flower2} />
                    </Wrapper.ImageWrapper>
                </Wrapper.Right>
            </Wrapper>
        </SwiperSlide>
      </Swiper>
        
    </Container>
  )
}
