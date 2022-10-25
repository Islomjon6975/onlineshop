import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    
`

Container.Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 20px;
`

Container.PersonalInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 28px; 
    margin-bottom: 37px;
`

const Input = styled.input`
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
    padding-left: 14px;
    width: 100%;
    height: 40px;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */


    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
    :focus {
        outline: 1px solid #46A358;
    }
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

Label.Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
`

const Select = styled.select`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    padding-left: 10px;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    color: #A5A5A5;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: #3D3D3D;
    text-align: center;
    color: #A5A5A5;
    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
    :focus {
        outline: 1px solid #46A358;
    }
`

Select.Option = styled.option`

`

Container.PasswordChange = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 28px; 
    margin-bottom: 50px;
`

const ImagePicker = styled.input`
    width: 50px;
    height: 50px;
    border: 1px solid #EAEAEA;
`

export {Container, Input, Label, Select, ImagePicker}