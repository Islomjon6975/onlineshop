import React, { useState } from 'react'
import { useProducts } from '../../context/Products'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Radio } from '../Generic/Radio'
import { Container, Title, Wrapper } from './style'

export const Register = () => {
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
            <Wrapper.Box>
                <Wrapper.Label>Enter your username and password to login.</Wrapper.Label>
                <Input mb='17px' type="text" placeholder='Username' />
                <Input mb='17px' type="email" placeholder='Enter your email address' />
                <Input mb='17px' type="text" placeholder='Email' />
                <Input mb='14px' type="password" placeholder='Password' />
                <Input mb='14px' type="password" placeholder='Confirm Password' />
                <Button mb='46px'>Register</Button>
                <Wrapper.Wrap>
                    <Wrapper.Or />
                    <Wrapper.OrLoginWith>Or register with</Wrapper.OrLoginWith>
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
            

  )
}
