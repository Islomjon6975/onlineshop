import React, { memo } from 'react'
import { Container, Text } from './style'

export const Button = memo(({
    children,
    type,
    icon,
    width,
    height,
    onClick,
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
            mr={mr}
            ml={ml}
            mb={mb}
            mt={mt}
            pr={pr}
            pl={pl}
            pb={pb}
            pt={pt}
            width={width}
            height={height}
            onClick={onClick}
            children={children}
        >   
            {icon}
            <Text>{children}</Text>
        </Container>
    )
})
