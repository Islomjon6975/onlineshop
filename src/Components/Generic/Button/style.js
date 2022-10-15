import styled from "styled-components";

const getType = (type) => {
    switch(type){
        case 'primary':
            return {
                background: `#46A358`,
                color: '#FFFFFF',
            };

        case 'secondary':
            return {
                gap: '6px',

            }

        default:
            return {
                background: `#46A358`,
                color: '#FFFFFF',
            };
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100px;
    height: 35px;
    border-radius: 6px;
    gap: 6px;
    transition: transform .3s ease-in-out;

    ${({ type }) => getType(type)}

    :active {
        transform: scale(0.97);
    }
    
`

const Text = styled.p`
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
`

export {Container,Text}