import React, { useState } from 'react'
import { categories, size } from '../../../utils/data'
import { Container, Main, Sidebar, Wrapper } from './style'
import superSale from '../../../assets/images/super-sale.png'
import { Card } from '../../Card'

export const Products = () => {
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({min: 0, max: 1500, categories: 'House Plants', size: 'Small', navlink: 'All Plants'})

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
                        <Sidebar.Item key={value.id} onClick={() => setState({...state, categories: value.title })}>
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
                        <Sidebar.Item key={value.id} onClick={() => setState({...state, size: value.title})}>
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
            <Main>
              <Main.Navbar>
                <Main.Navbar.Items>
                  <Main.Navbar.Item weight={state.navlink==='All Plants' ? '700' : '400'} border={state.navlink==='All Plants' ? '2px solid #46A358' : ''} color={state.navlink==='All Plants' ? '#46A358' : '#3D3D3D'} onClick={() => setState({...state, navlink: 'All Plants'})}>All Plants</Main.Navbar.Item>
                  <Main.Navbar.Item weight={state.navlink==='New Arrivals' ? '700' : '400'} border={state.navlink==='New Arrivals' ? '2px solid #46A358' : ''} color={state.navlink==='New Arrivals' ? '#46A358' : '#3D3D3D'} onClick={() => setState({...state, navlink: 'New Arrivals'})}>New Arrivals</Main.Navbar.Item>
                  <Main.Navbar.Item weight={state.navlink==='Sale' ? '700' : '400'} border={state.navlink==='Sale' ? '2px solid #46A358' : ''} color={state.navlink==='Sale' ? '#46A358' : '#3D3D3D'} onClick={() => setState({...state, navlink: 'Sale'})}>Sale</Main.Navbar.Item>
                </Main.Navbar.Items>
                <Main.Navbar.Sort>
                  Short By:
                  <Main.Navbar.Select>
                    <Main.Navbar.Option value='Default sorting'>Default Sorting</Main.Navbar.Option>
                    <Main.Navbar.Option value='Most Expensive'>Most Expensive</Main.Navbar.Option>
                    <Main.Navbar.Option value='Cheapest'>Cheapest</Main.Navbar.Option>
                  </Main.Navbar.Select>
                </Main.Navbar.Sort>
              </Main.Navbar>
              <Main.Products>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Main.Products>
            </Main>
        </Wrapper>
    </Container>
  )
}
