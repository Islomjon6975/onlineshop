import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../context/Products'
import { Card } from '../Card'
import { Container, Title, Wrapper } from './style'

export const ShopComponent = () => {
    const [state] = useProducts()
  return (
    <Container>
        <Title>Products</Title>
        <Wrapper>
            {state.data.map((value) => {
                return(
                    <Card
                        key={value?.id}
                        id={value?.id}
                        title={value?.title}
                        img={value?.img}
                        price={value?.price}
                        salePrice={value?.salePrice}
                        discount={value?.discount}
                        like={value?.like}
                        quantity={value?.quantity}
                        addtocart={value?.addtocart}
                    />
                )
            })}
            
        </Wrapper>
    </Container>
  )
}

{/* <Product>
                        <Product.ImageWrapper>
                            <Product.Image src={item.img} />
                        </Product.ImageWrapper>
                        <Product.Details>
                            <Product.Title>{item.title}</Product.Title>
                            <Product.Price>${item.price}.00</Product.Price>
                        </Product.Details>
                    </Product> */}