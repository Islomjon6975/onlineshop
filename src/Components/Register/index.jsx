import React, {  useState } from 'react'
import { Button } from '../Generic/Button'
import { Radio } from '../Generic/Radio'
import { Input, Select, Wrapper } from './style'
import { message } from 'antd';
import { useRegister } from '../../context/RegistrationContext'
export const Register = () => {
    // const [color, setColor] = useState('login')
    const [, setRegistration] = useRegister()
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        phoneCode: '',
        phone: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user'
    })

    const register = () => {
        const {username, email, password, confirmPassword, role} = signUp

        if(username.length > 2 && email.length > 8 && (email.includes('gmail.com') || email.includes('mail.ru')) && password.length > 3 && confirmPassword === password) {
            message.success('Successfully Registered');
            setRegistration({type: 'register', payload: {user: signUp, role: role}})
        } else {
            message.error('Something went wrong while registering!');
        }
        
    }
  return (
            <Wrapper.Box>
                <Wrapper.Label>Enter your username and password to login.</Wrapper.Label>
                <Wrapper.Form>
                    {
                        signUp.role === 'seller' 
                        && (
                            <>
                            <Input required onChange={(e) => setSignUp({...signUp, firstName: e.target.value})}  mb='17px' type="text" placeholder='First Name' />
                            <Input required onChange={(e) => setSignUp({...signUp, lastName: e.target.value})}  mb='17px' type="text" placeholder='Last Name' />
                            </>
                        )
                    }
                    <Input required onChange={(e) => setSignUp({...signUp, username: e.target.value})}  mb='17px' type="text" placeholder='Username' />
                    <Input required onChange={(e) => setSignUp({...signUp, email: e.target.value})} mb='17px' type="email" placeholder='Enter your email address' />
                    {
                        signUp.role === 'seller' && 
                        <Wrapper.Phone>
                            <Select onChange={(e) => setRegistration({...signUp, phoneCode: e.target.value})}>
                                <Select.Option value="+1">+1</Select.Option>
                                <Select.Option value="+82">+82</Select.Option>
                                <Select.Option value="+86">+86</Select.Option>
                                <Select.Option value="+998">+998</Select.Option>
                            </Select>
                            <Input required onChange={(e) => setSignUp({...signUp, phone: e.target.value})}  mb='17px' type="text" placeholder='Phone Number' />
                        </Wrapper.Phone>
                    }
                    
                    <Input required onChange={(e) => setSignUp({...signUp, password: e.target.value})} mb='14px' type="password" placeholder='Password' />
                    <Input required onChange={(e) => setSignUp({...signUp, confirmPassword: e.target.value})}  mb='14px' type="password" placeholder='Confirm Password' />
                    <Select defaultValue={'user'} onChange={(e) => setSignUp({...signUp, role: e.target.value})}>
                        <Select.Option value='user'>User</Select.Option>
                        <Select.Option value='seller'>Seller</Select.Option>
                    </Select>
                    <Button type='submit' onClick={register} mb='46px'>Register</Button>
                </Wrapper.Form>
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
