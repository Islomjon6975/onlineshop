import React, {  useState } from 'react'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Radio } from '../Generic/Radio'
import { Wrapper } from './style'
import { message } from 'antd';
import { useRegister } from '../../context/RegistrationContext'
export const Register = () => {
    // const [color, setColor] = useState('login')
    const [registration, setRegistration] = useRegister()
    const [signUp, setSignUp] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const register = () => {
        const {username, email, password, confirmPassword} = signUp

        if(username.length > 2 && email.length > 8 && (email.includes('gmail.com') || email.includes('mail.ru')) && password.length > 3 && confirmPassword === password) {
            message.success('Successfully Registered');
            setRegistration({type: 'register', payload: {user: signUp}})
        } else {
            message.error('Something went wrong while registering!');
        }
        
    }
  return (
            <Wrapper.Box>
                <Wrapper.Label>Enter your username and password to login.</Wrapper.Label>
                <Input onChange={(e) => setSignUp({...signUp, username: e.target.value})}  mb='17px' type="text" placeholder='Username' />
                <Input onChange={(e) => setSignUp({...signUp, email: e.target.value})} mb='17px' type="email" placeholder='Enter your email address' />
                <Input onChange={(e) => setSignUp({...signUp, password: e.target.value})} mb='14px' type="password" placeholder='Password' />
                <Input onChange={(e) => setSignUp({...signUp, confirmPassword: e.target.value})}  mb='14px' type="password" placeholder='Confirm Password' />
                <Button onClick={register} mb='46px'>Register</Button>
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
