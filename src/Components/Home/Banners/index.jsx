import React from 'react'
import { Box, Container } from './style'
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import { Button } from '../../Generic/Button'

export const Banners = () => {
  return (
    <Container>
        <Box>
          <Box.ImageWrapper>
            <Box.ImageWrapper.Image src={banner1} />
          </Box.ImageWrapper>
          <Box.Content>
            <Box.Content.Title>Summer Cactus & Succulents</Box.Content.Title>
            <Box.Content.Description>We are an online plant shop offering a wide range of cheap and trendy plants. </Box.Content.Description>
            <Button width='150px'>Find More</Button>
          </Box.Content>
       </Box>
        <Box>
          <Box.ImageWrapper>
            <Box.ImageWrapper.Image src={banner2} />
          </Box.ImageWrapper>
          <Box.Content>
            <Box.Content.Title>Styling Trends & Much More</Box.Content.Title>
            <Box.Content.Description>We are an online plant shop offering a wide range of cheap and trendy plants. </Box.Content.Description>
            <Button width='150px'>Find More</Button>
          </Box.Content>
       </Box>
    </Container>
  )
}
