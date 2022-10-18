import React, { memo } from 'react'
import { Container } from './style'

export const Input = memo(({
    children,
    type,
    icon,
    width,
    height,
    onChange,
    placeholder,
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
            onChange={onChange}
            children={children}
            placeholder={placeholder}
        >   
            {children}
        </Container>
    )
})
