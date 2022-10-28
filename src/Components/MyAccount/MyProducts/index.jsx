import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../../context/Products'
import { Container, Wrapper } from './style'

export const MyProducts = () => {
    const [state, dispatch] = useProducts()
    const navigate = useNavigate()
  return (
    <Container>
        <Wrapper>
            <Wrapper.Navbar>
                <Wrapper.Navbar.Item>Products</Wrapper.Navbar.Item>
                <Wrapper.Navbar.Item>Data published</Wrapper.Navbar.Item>
                <Wrapper.Navbar.Item>Status</Wrapper.Navbar.Item>
                <Wrapper.Navbar.Item>View</Wrapper.Navbar.Item>
                <Wrapper.Navbar.Item>Action</Wrapper.Navbar.Item>
            </Wrapper.Navbar>
            <Wrapper.Products>
                {
                    state.data.map((value) => {
                        return (
                            <Wrapper.Product key={value?.id}>
                                <Wrapper.Product.Item>
                                    <Wrapper.Product.Item.ImageWrapper>
                                        <Wrapper.Product.Item.Image src={value?.img} alt='img' />
                                    </Wrapper.Product.Item.ImageWrapper>
                                    <Wrapper.Product.Content>
                                        <Wrapper.Product.Title>{value?.title}</Wrapper.Product.Title>
                                        <Wrapper.Product.Sku>SKU: 1995751877966</Wrapper.Product.Sku>
                                    </Wrapper.Product.Content>
                                </Wrapper.Product.Item>
                                <Wrapper.Product.Item>{value?.publishDate}</Wrapper.Product.Item>
                                <Wrapper.Product.Item>{value?.status}</Wrapper.Product.Item>
                                <Wrapper.Product.Item>{value?.view}</Wrapper.Product.Item>
                                <Wrapper.Product.Item>
                                    <Wrapper.Actions>
                                        <Wrapper.Edit onClick={() => {dispatch({type: "edit", payload: {id: value?.id}}); navigate(`/myprofile/myproducts/:${value?.id}`)} }/>
                                        <Wrapper.Trash onClick={() => dispatch({type: "trash", payload: {id: value?.id}})} />
                                    </Wrapper.Actions>
                                </Wrapper.Product.Item>
                            </Wrapper.Product>
                        )
                    })
                }
                
            </Wrapper.Products>
            
        </Wrapper>
    </Container>
  )
}
