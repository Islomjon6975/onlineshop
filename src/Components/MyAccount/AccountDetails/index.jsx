import React, { useRef, useState } from 'react'
import { useRegister } from '../../../context/RegistrationContext'
import { Button } from '../../Generic/Button'
import { Container, ImagePicker, Input, Label, Select } from './style'

export const AccountDetails = () => {
    const [registration, setRegistration] = useRegister();
    const [profileInfo, setProfileInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: '',
        phone: '',
        username: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword:''
    })
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const phoneCodeRef = useRef('')
    const phoneRef = useRef('')
    const usernameRef = useRef('')
    const currentPasswordRef = useRef('')
    const newPasswordRef = useRef('')
    const confirmPasswordRef = useRef('')

    const save = () => {
        setProfileInfo({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: `${phoneCodeRef.current.value}${phoneRef.current.value}`,
            username: usernameRef.current.value,
            currentPassword: currentPasswordRef.current.value,
            newPassword: newPasswordRef.current.value,
            confirmPassword:confirmPasswordRef.current.value
        })

        if(registration.password === currentPasswordRef.current.value ) {
            localStorage.setItem('register', JSON.stringify(profileInfo))
            alert('local')
        }
    }
  return (
    <Container>
        <Container.Title>Personal Information</Container.Title>
        <Container.PersonalInfo>
            <Label >
                First Name
                <Input ref={firstNameRef} />
            </Label>
            <Label >
                Last Name
                <Input ref={lastNameRef} />
            </Label>
            <Label >
                Email Address
                <Input ref={emailRef} />
            </Label>
            <Label >
                Phone Number
                <Label.Wrapper>
                    <Select ref={phoneCodeRef} >
                        <Select.Option value='+1'>+1</Select.Option>
                        <Select.Option value='+86'>+86</Select.Option>
                        <Select.Option value='+82'>+82</Select.Option>
                        <Select.Option value='+966'>+966</Select.Option>
                        <Select.Option value='+998'>+966</Select.Option>
                    </Select>
                    <Input ref={phoneRef} width='100%' />
                </Label.Wrapper>
            </Label>
            <Label >
                Username
                <Input ref={usernameRef} />
            </Label>
            
        </Container.PersonalInfo>
        <Container.Title>Password change</Container.Title>
        <Container.PasswordChange>
            <Label >
                Current password
                <Input ref={currentPasswordRef} />
            </Label>
            <Label >
                New password
                <Input ref={newPasswordRef} />
            </Label>
            <Label >
                Confirm password
                <Input ref={confirmPasswordRef} />
            </Label>
        </Container.PasswordChange>
        <Button onClick={save} width='131px'>Save Change</Button>
    </Container>
  )
}
