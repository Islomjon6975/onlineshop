import React, { useState } from 'react'
import { categories, size } from '../../../utils/data'
import { Container, Main, Sidebar, Wrapper } from './style'
import superSale from '../../../assets/images/super-sale.png'
import { Card } from '../../Card'
import { useProducts } from '../../../context/Products'
import { Pagination } from 'antd'

export const Products = () => {
  const [change, setChange] = useState({min: 0, max: 1500, categories: 'House Plants', size: 'Small', navlink: 'All Plants'})
  const [state, dispatch] = useProducts()
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
                        <Sidebar.Item key={value.id} onClick={() => setChange({...change, categories: value.title })}>
                            <Sidebar.Text color={change.categories===value.title ? '#46A358' : '#3D3D3D'} >{value.title}</Sidebar.Text>
                            <Sidebar.Number color={change.categories===value.title ? '#46A358' : '#3D3D3D'}>({value.num})</Sidebar.Number>
                        </Sidebar.Item>
                      )
                    })
                  }
                </Sidebar.Items>
                <Sidebar.Title>Price Range</Sidebar.Title>
                <Sidebar.Items>
                  <Sidebar.Slider max={500} onChange={(e) => dispatch({type: 'slider', payload: {min: e[0], max: e[1]}})} range defaultValue={[0, 500]}  />
                  <Sidebar.Price>Price: <span>${state.min}.00 - ${state.max}.00</span> </Sidebar.Price>
                </Sidebar.Items>
                <Sidebar.Title>Size</Sidebar.Title>
                <Sidebar.Items>
                {
                    size.map((value) => {
                      return(
                        <Sidebar.Item key={value.id} onClick={() => setChange({...change, size: value.title})}>
                            <Sidebar.Text color={change.size===value.title ? '#46A358' : '#3D3D3D'}>{value.title}</Sidebar.Text>
                            <Sidebar.Number color={change.size===value.title ? '#46A358' : '#3D3D3D'}>({value.num})</Sidebar.Number>
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
                  <Main.Navbar.Item weight={change.navlink==='All Plants' ? '700' : '400'} border={change.navlink==='All Plants' ? '2px solid #46A358' : ''} color={change.navlink==='All Plants' ? '#46A358' : '#3D3D3D'} onClick={() => setChange({...change, navlink: 'All Plants'})}>All Plants</Main.Navbar.Item>
                  <Main.Navbar.Item weight={change.navlink==='New Arrivals' ? '700' : '400'} border={change.navlink==='New Arrivals' ? '2px solid #46A358' : ''} color={change.navlink==='New Arrivals' ? '#46A358' : '#3D3D3D'} onClick={() => setChange({...change, navlink: 'New Arrivals'})}>New Arrivals</Main.Navbar.Item>
                  <Main.Navbar.Item weight={change.navlink==='Sale' ? '700' : '400'} border={change.navlink==='Sale' ? '2px solid #46A358' : ''} color={change.navlink==='Sale' ? '#46A358' : '#3D3D3D'} onClick={() => setChange({...change, navlink: 'Sale'})}>Sale</Main.Navbar.Item>
                </Main.Navbar.Items>
                <Main.Navbar.Sort>
                  Short By:
                  <Main.Navbar.Select defaultValue={'Default sorting'} onChange={(e) => dispatch({type: 'select', payload: {value: e.target.value}})}>
                    <Main.Navbar.Option value='Default sorting'>Default Sorting</Main.Navbar.Option>
                    <Main.Navbar.Option value='Most Expensive'>Most Expensive</Main.Navbar.Option>
                    <Main.Navbar.Option value='Cheapest'>Cheapest</Main.Navbar.Option>
                  </Main.Navbar.Select>
                </Main.Navbar.Sort>
                <Main.Settings />
              </Main.Navbar>
              <Main.Products>
                {
                  state?.data?.map(value => {
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
                        />
                    )
                  })
                }
                
                
              </Main.Products>
              <Main.Panginate>
                <Pagination  defaultCurrent={1} total={40} />
              </Main.Panginate>
            </Main>
        </Wrapper>
    </Container>
  )
}
