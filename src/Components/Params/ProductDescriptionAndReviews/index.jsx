import React, { useState } from 'react'
import { Container, Descriptions, Nav } from './style'

export const ProductDescriptionAndReviews = () => {
    const [color, setColor] = useState('description')

  return (
    <Container>
        <Nav>
            <Nav.Item onClick={() => setColor('description')} color={color === 'description' && '#46A358'}>Product Description</Nav.Item>
            <Nav.Item onClick={() => setColor('reviews')} color={color === 'reviews' && '#46A358'}>Reviews (19)</Nav.Item>
        </Nav>
        <Descriptions>
            <Descriptions.Text>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            </Descriptions.Text>
            <Descriptions.Text>
                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
            </Descriptions.Text>
            <Descriptions.Text>
                <Descriptions.Subtitle>Living Room:</Descriptions.Subtitle>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Descriptions.Text>
            <Descriptions.Text>
                <Descriptions.Subtitle>Dining Room:</Descriptions.Subtitle>
                The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
            </Descriptions.Text>
            <Descriptions.Text>
                <Descriptions.Subtitle>Office:</Descriptions.Subtitle>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Descriptions.Text>
        </Descriptions>
    </Container>
  )
}
