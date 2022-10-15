import React from 'react'
import { Container, Text } from './style'

export const Button = ({
    children,
    type,
    icon,
    width,
    height,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl
    }) => {
    return (
        <Container
            type={type}
        >   
            {icon}
            <Text>{children}</Text>
        </Container>
    )
}
