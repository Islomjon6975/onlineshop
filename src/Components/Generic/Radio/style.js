import styled from "styled-components";

const Label = styled.label`
    width: 100%;
    height: 40px;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    radio:checked {
        transform: scale(0.97);
    }
`

const Input = styled.input``


export {Label, Input}