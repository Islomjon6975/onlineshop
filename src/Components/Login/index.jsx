import React, { useState } from 'react'
import { useProducts } from '../../context/Products'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Radio } from '../Generic/Radio'
import { Register } from '../Register'
import { Container, Title, Wrapper } from './style'
import { message } from 'antd';
import { useRegister } from '../../context/RegistrationContext'

export const Login = () => {
    const [color, setColor] = useState('login')
    const [state, dispatch] = useProducts()
    const [register, setRegistration] = useRegister()
    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    })

    const login = () => {
        if(signIn.email === register.email && signIn.password === register.password) {
            message.success('Successfully Logged In');
            localStorage.setItem('greenshopToken', JSON.stringify(register))
            dispatch({type: 'closeModal'})
        } else {
            message.error('Something went wront while signing');
        }
        setSignIn({email: '', password: ''})
    }


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
                <Title onClick={() => setColor('login')} color={color==='login' ? '#46A358' : "none"}>Login</Title>
                <Wrapper.Line />
                <Title onClick={() => setColor('register')} color={color==='register' ? '#46A358' : "none"}>Register</Title>
            </Wrapper.Wrap>

            {
                color === 'login'  
                ? (
                    <Wrapper.Box>
                        <Wrapper.Label>Enter your username and password to login.</Wrapper.Label>
                        <Input value={signIn.value} onChange={(e)=>setSignIn({...signIn, email: e.target.value})} mb='17px' type="email" placeholder='Email' />
                        <Input value={signIn.password} onChange={(e)=>setSignIn({...signIn, password: e.target.value})} mb='14px' type="password" placeholder='Password' />
                        <Wrapper.Forgot>Forgot Password?</Wrapper.Forgot>
                        <Button onClick={login} mb='46px'>Login</Button>
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
