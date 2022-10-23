import React from 'react'
import { Breadcrumb } from 'antd';
import { Container, Left, Right, Wrapper } from './style'

export const ShoppingCart = () => {
  return (
    <Container>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Shop</Breadcrumb.Item>
            <Breadcrumb.Item>Shopping Cart</Breadcrumb.Item>
        </Breadcrumb>
        <Wrapper>
            <Left>
                <Left.Table>
                    <Left.Thead>
                        <Left.Tr>
                            <Left.Th>Products</Left.Th>
                            <Left.Th>Price</Left.Th>
                            <Left.Th>Quantity</Left.Th>
                            <Left.Th>Total</Left.Th>
                            <Left.Th>Actions</Left.Th>
                        </Left.Tr>
                    </Left.Thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </Left.Table>
            </Left>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}
