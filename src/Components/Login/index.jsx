import React, { useState } from 'react'
import { useProducts } from '../../context/Products'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Radio } from '../Generic/Radio'
import { Register } from '../Register'
import { Container, Title, Wrapper } from './style'

export const Login = () => {
    const [color, setColor] = useState('login')
    const [state, dispatch] = useProducts()

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

  return (
    <Container
        title="Title"
        open={state.modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => dispatch({type: 'closeModal'})}
    >
        <Wrapper>
            <Wrapper.Wrap>
                <Title onClick={() => setColor('login')} color={color==='login' && '#46A358'}>Login</Title>
                <Wrapper.Line />
                <Title onClick={() => setColor('register')} color={color==='register' && '#46A358'}>Register</Title>
            </Wrapper.Wrap>

            {
                color === 'login'  
                ? (
                    <Wrapper.Box>
                        <Wrapper.Label>Enter your username and password to login.</Wrapper.Label>
                        <Input mb='17px' type="email" placeholder='Email' />
                        <Input mb='14px' type="password" placeholder='Password' />
                        <Wrapper.Forgot>Forgot Password?</Wrapper.Forgot>
                        <Button mb='46px'>Login</Button>
                        <Wrapper.Wrap>
                            <Wrapper.Or />
                            <Wrapper.OrLoginWith>Or login with</Wrapper.OrLoginWith>
                            <Wrapper.Or />
                        </Wrapper.Wrap>
                        <Wrapper.Radios>
                            <Radio>
                                <Wrapper.Google />
                                <Wrapper.Text>Login with Google</Wrapper.Text>
                            </Radio>
                            <Radio>
                                <Wrapper.Facebook />
                                <Wrapper.Text>Login with Facebook</Wrapper.Text>
                            </Radio>
                        </Wrapper.Radios>
                    </Wrapper.Box>
                ) : <Register />
            }
        </Wrapper>
    </Container>
  )
}
