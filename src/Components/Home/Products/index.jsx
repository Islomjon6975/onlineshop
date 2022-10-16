import React, { useState } from 'react'
import { categories, size } from '../../../utils/data'
import { Container, Main, Sidebar, Wrapper } from './style'
import superSale from '../../../assets/images/super-sale.png'

export const Products = () => {
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({min: 0, max: 1500, categories: 'House Plants', size: 'Small'})

  const sidebar = (title) => {
    setState({...state, categories: title})
  }

  const sidebarSmall = (title) => {
    setState({...state, size: title})
  }
  return (
    <Container>
        <Wrapper>
            <Sidebar>
              <Sidebar.Wrapper>
                <Sidebar.Title>Categories</Sidebar.Title>
                <Sidebar.Items>
                {
                    categories.map((value) => {
                      return(
                        <Sidebar.Item key={value.id} onClick={() => sidebar(value.title)}>
                            <Sidebar.Text color={state.categories===value.title ? '#46A358' : '#3D3D3D'} >{value.title}</Sidebar.Text>
                            <Sidebar.Number color={state.categories===value.title ? '#46A358' : '#3D3D3D'}>({value.num})</Sidebar.Number>
                        </Sidebar.Item>
                      )
                    })
                  }
                </Sidebar.Items>
                <Sidebar.Title>Price Range</Sidebar.Title>
                <Sidebar.Items>
                  <Sidebar.Slider max={1500} onChange={(e) => setState({min: e[0], max: e[1]})} range defaultValue={[0, 1500]} disabled={disabled} />
                  <Sidebar.Price>Price: <span>${state.min} - ${state.max}</span> </Sidebar.Price>
                </Sidebar.Items>
                <Sidebar.Title>Size</Sidebar.Title>
                <Sidebar.Items>
                {
                    size.map((value) => {
                      return(
                        <Sidebar.Item key={value.id} onClick={() => sidebarSmall(value.title)}>
                            <Sidebar.Text color={state.size===value.title ? '#46A358' : '#3D3D3D'}>{value.title}</Sidebar.Text>
                            <Sidebar.Number color={state.size===value.title ? '#46A358' : '#3D3D3D'}>({value.num})</Sidebar.Number>
                        </Sidebar.Item>
                      )
                    })
                  }
                </Sidebar.Items>
              </Sidebar.Wrapper>
              <Sidebar.SuperSale src={superSale} />
            </Sidebar>
            <Main>2</Main>
        </Wrapper>
    </Container>
  )
}
