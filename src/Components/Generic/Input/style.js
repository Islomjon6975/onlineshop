import styled from "styled-components";

const getType = (type) => {
    switch(type){
        case 'primary':
            return {
             
            };
        case 'secondary':
            return {
             
            }

        default:
            return {
                color: '#A5A5A5',
                outline: '1px solid #46A358',
                border: '1px solid #EAEAEA',
                borderRadius: '5px',
            };
    }
}

const Container = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    gap: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    transition: transform .3s ease-in-out;
    cursor: pointer;
    height: ${({ height }) => height || '40px'};
    min-width: ${({ width }) => (width ? width : '100%')};
    width: ${({ width }) => (width ? width : '100%')};
    margin-right: ${({ mr }) => `${mr}`};
    margin-left: ${({ ml }) => `${ml}`};
    margin-top: ${({ mt }) => `${mt}`};
    margin-bottom: ${({ mb }) => `${mb}`};
    padding-left: 14px;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

    /* ${({ type }) => getType(type)} */

    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
    :focus {
        outline: 1px solid #46A358;
    }
`


export {Container}