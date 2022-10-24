import React from 'react'
import { Outlet } from 'react-router-dom'
import { myprofile } from '../../utils/myprofile'
import { AddNew } from './AddNew'
import { Container, OutletWrapper, Sidebar } from './style'
import { message, Popconfirm } from 'antd';

const active = (url) => {
  return window.location.pathname.includes(url)
}

export const MyAccount = () => {
  const confirm = (e) => {
    console.log(e);
    message.success('Logged out');
    localStorage.removeItem('greenshopToken')
  };
  
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <Container>
      <Sidebar>
        <Sidebar.Container>
          <Sidebar.Title>My Account</Sidebar.Title>
          <Sidebar.Wrapper>
            {
              myprofile.map(({id, title, path, element, icon: Icon}) => {
                return(
                  <Sidebar.Navlink key={id}  active={active(path)} exact to={path}><Icon /> {title}</Sidebar.Navlink>
                )
              })
            }
          </Sidebar.Wrapper>
        </Sidebar.Container>
        <Popconfirm
          title="Are you sure to log out of this website?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Sidebar.Logout><Sidebar.Logout.Icon /> Logout</Sidebar.Logout>
        </Popconfirm>
      </Sidebar>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  )
}
