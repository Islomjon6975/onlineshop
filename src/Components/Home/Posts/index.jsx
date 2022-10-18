import React from 'react'
import { Container, Wrapper } from './style'
import post1 from '../../../assets/images/post1.png'
import post2 from '../../../assets/images/post2.png'
import post3 from '../../../assets/images/post3.png'
import post4 from '../../../assets/images/post4.png'

export const Posts = () => {
  return (
    <Container>
        <Wrapper>
            <Wrapper.Title>Our Blog Posts</Wrapper.Title>
            <Wrapper.Description>We are an online plant shop offering a wide range of cheap and trendy plants. </Wrapper.Description>
            <Wrapper.Posts>
                <Wrapper.Post>
                    <Wrapper.Post.ImageWrapper>
                        <Wrapper.Post.Image src={post1} />
                    </Wrapper.Post.ImageWrapper>
                    <Wrapper.Post.Details>
                        <Wrapper.Post.Date>September 12  I Read in 6 minutes</Wrapper.Post.Date>
                        <Wrapper.Post.Title>Cactus & Succulent Care Tips</Wrapper.Post.Title>
                        <Wrapper.Post.Description>Cacti are succulents are easy care plants for any home or patio. </Wrapper.Post.Description>
                        <Wrapper.Post.Button>Read More <Wrapper.Post.Icon /></Wrapper.Post.Button>
                    </Wrapper.Post.Details>
                </Wrapper.Post>
                <Wrapper.Post>
                    <Wrapper.Post.ImageWrapper>
                        <Wrapper.Post.Image src={post2} />
                    </Wrapper.Post.ImageWrapper>
                    <Wrapper.Post.Details>
                        <Wrapper.Post.Date>September 12  I Read in 6 minutes</Wrapper.Post.Date>
                        <Wrapper.Post.Title>Cactus & Succulent Care Tips</Wrapper.Post.Title>
                        <Wrapper.Post.Description>Cacti are succulents are easy care plants for any home or patio. </Wrapper.Post.Description>
                        <Wrapper.Post.Button>Read More <Wrapper.Post.Icon /></Wrapper.Post.Button>
                    </Wrapper.Post.Details>
                </Wrapper.Post>
                <Wrapper.Post>
                    <Wrapper.Post.ImageWrapper>
                        <Wrapper.Post.Image src={post3} />
                    </Wrapper.Post.ImageWrapper>
                    <Wrapper.Post.Details>
                        <Wrapper.Post.Date>September 12  I Read in 6 minutes</Wrapper.Post.Date>
                        <Wrapper.Post.Title>Cactus & Succulent Care Tips</Wrapper.Post.Title>
                        <Wrapper.Post.Description>Cacti are succulents are easy care plants for any home or patio. </Wrapper.Post.Description>
                        <Wrapper.Post.Button>Read More <Wrapper.Post.Icon /></Wrapper.Post.Button>
                    </Wrapper.Post.Details>
                </Wrapper.Post>
                <Wrapper.Post>
                    <Wrapper.Post.ImageWrapper>
                        <Wrapper.Post.Image src={post4} />
                    </Wrapper.Post.ImageWrapper>
                    <Wrapper.Post.Details>
                        <Wrapper.Post.Date>September 12  I Read in 6 minutes</Wrapper.Post.Date>
                        <Wrapper.Post.Title>Cactus & Succulent Care Tips</Wrapper.Post.Title>
                        <Wrapper.Post.Description>Cacti are succulents are easy care plants for any home or patio. </Wrapper.Post.Description>
                        <Wrapper.Post.Button>Read More <Wrapper.Post.Icon /></Wrapper.Post.Button>
                    </Wrapper.Post.Details>
                </Wrapper.Post>
            </Wrapper.Posts>
        </Wrapper>
    </Container>
  )
}
