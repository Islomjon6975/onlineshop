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
    align-items: center;
    border-radius: 6px;
    gap: 6px;
    transition: transform .3s ease-in-out;
    cursor: pointer;

    height: ${({ height }) => height || '35px'};
    min-width: ${({ width }) => (width ? width : '100%')};
    width: ${({ width }) => (width ? width : '100%')};
    margin-right: ${({ mr }) => `${mr}`};
    margin-left: ${({ ml }) => `${ml}`};
    margin-top: ${({ mt }) => `${mt}`};
    margin-bottom: ${({ mb }) => `${mb}`};

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

    ${({ type }) => getType(type)}

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
`

const Text = styled.div`
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
`

export {Container,Text}