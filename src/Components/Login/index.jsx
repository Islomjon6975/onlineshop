import React from 'react'
import { Container, Input, InputWrapper, Line, Register, Subtitle, Title, Wrapper } from './style.js'

export const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Line />
            <Register>Register</Register>
        </Wrapper>
        <Subtitle>Enter your email and password to register.</Subtitle>
        <InputWrapper>
          <Input placeholder='User Name' />dasd
          <Input placeholder='Enter your email address' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
        </InputWrapper>
    </Container>
  )
}
