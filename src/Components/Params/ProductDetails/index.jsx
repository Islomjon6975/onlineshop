import React, { useState } from 'react'
import { Container, Left, Right, Wrapper } from './style'
import { Breadcrumb } from 'antd';


import flower1 from '../../../assets/images/flower1.png'
import flower2 from '../../../assets/images/flower2.png'
import flower3 from '../../../assets/images/flower3.png'
import flower4 from '../../../assets/images/flower4.png'
import { Button } from '../../Generic/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../../context/Products';


export const ProductDetails = () => {
    const [state, dispatch] = useProducts()
    const navigate = useNavigate()

    var imgSet = [flower1, flower2, flower3, flower4];
    const [showImg, setShowImg] = useState(3);

    const param = useParams();
    const selectedProduct = state.data.filter((value) => value.id === +     param.id.replace(':', ''))[0]
    console.log(selectedProduct)

  return (
    <Container>
        <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/home')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate('/shop')}>Shop</Breadcrumb.Item>
        </Breadcrumb>

        <Wrapper>
            {/* Product Images */}
            <Left>
                <Left.ImgSet>
                    <Left.ImgWrapper>
                        {imgSet.map((value, index) => (
                        <Left.ImgSet.Img
                            key={index}
                            src={value}
                            onClick={() => setShowImg(index)}
                            
                        />
                        ))}
                    </Left.ImgWrapper>
                </Left.ImgSet>
                <Left.MainImgLeft>
                    <a style={{ color: '#000' }} href='#description'>
                    <Left.Search />
                    </a>
                    <Left.MainLeft img src={imgSet[showImg]} />
                </Left.MainImgLeft>
            </Left>
            

            {/* Product Details */}
            <Right>
                <Right.Title>{selectedProduct?.title}</Right.Title>
                <Right.Wrapper>
                    <Right.Price>${selectedProduct?.price}.00</Right.Price>
                    <Right.Reviews>
                        <Right.ReviewsWrapper>
                            <Right.StarGold />
                            <Right.StarGold />
                            <Right.StarGold />
                            <Right.StarGold />
                            <Right.StarGold />
                            <Right.StarGrey />
                        </Right.ReviewsWrapper>
                        
                        19 Customer Review
                    </Right.Reviews>
                </Right.Wrapper>
                <Right.Subtitle>Short Description:</Right.Subtitle>
                <Right.Description>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </Right.Description>
                <Right.Subtitle>Size:</Right.Subtitle>
                <Right.Sizes>
                    <Right.Radio hidden type="radio" id='s' name='size' />
                    <Right.Label htmlFor='s' className='label'>
                        S
                    </Right.Label>
                    <Right.Radio hidden id='m' type="radio" name='size' />
                    <Right.Label htmlFor='m' className='label'>
                        M
                    </Right.Label>
                    <Right.Radio hidden id='l' type="radio" name='size' />
                    <Right.Label htmlFor='l' className='label'>
                        L
                    </Right.Label>
                    <Right.Radio hidden id='xl' type="radio" name='size' />
                    <Right.Label htmlFor='xl' className='label'>
                        XL
                    </Right.Label>
                </Right.Sizes>
                    
                <Right.Buttons>
                    <Right.IncDesWrapper>
                        <Right.IncDec>
                            <Right.Minus />
                        </Right.IncDec>
                        <Right.Counter>1</Right.Counter>
                        <Right.IncDec>
                            <Right.Plus />
                        </Right.IncDec>
                    </Right.IncDesWrapper>
                    <Right.Buttons.Wrapper>
                        <Button width='130px' height='40px'>Buy Now</Button>
                        <Button width='130px' height='40px'>Add to cart</Button>
                        <Right.LikeWrapper>
                            <Right.HeartGreen />
                        </Right.LikeWrapper>
                    </Right.Buttons.Wrapper>
                </Right.Buttons>

                <Right.Contents>
                    <Right.Contents.Title>SKU:</Right.Contents.Title>
                    <Right.Contents.Subtitle>1995751877966</Right.Contents.Subtitle>
                </Right.Contents>
                <Right.Contents>
                    <Right.Contents.Title>Categories:</Right.Contents.Title>
                    <Right.Contents.Subtitle>Potter Plants</Right.Contents.Subtitle>
                </Right.Contents>
                <Right.Contents>
                    <Right.Contents.Title>Tags:</Right.Contents.Title>
                    <Right.Contents.Subtitle>Home, Gardens, Plants</Right.Contents.Subtitle>
                </Right.Contents>
                <Right.Subtitle>Share this products:</Right.Subtitle>

            </Right>
        </Wrapper>
    </Container>
  )
}
