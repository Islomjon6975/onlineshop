import styled from "styled-components";
import {ReactComponent as line} from '../../assets/icons/line.svg'
import {ReactComponent as or} from '../../assets/icons/or.svg'
import {ReactComponent as google} from '../../assets/icons/google.svg'
import {ReactComponent as facebook} from '../../assets/icons/facebook.svg'
import { Modal } from "antd";

const Container = styled(Modal)`
    width: 500px;
    background: #FFFFFF;
    
    border-bottom: 10px solid #46A358;
    .ant-modal{
        padding: 0px !important;
    }
    .ant-modal-title {
        display: none;
    }
    .ant-modal-header {
        border-bottom: none;
        padding: 0px;
    }
    .ant-modal-footer {
        display: none;
        padding: 0px;
    }
    .ant-modal-body {
        padding: 0px;
    }
    
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 52px 100px 40px 100px;
`

Wrapper.Box = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

Wrapper.Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
`

Wrapper.Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

Wrapper.Phone = styled.div`
    display: grid;
    grid-template-columns: 78px 1fr;
    grid-gap: 10px;
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

const Select = styled.select`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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

const Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: ${({color}) => color ? color : '#3D3D3D'};
`

Wrapper.Line = styled(line)``

Wrapper.Label = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #3D3D3D;
    margin: 53px 0px 14px 0px;
`

Wrapper.Forgot = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #46A358;
    margin-left: auto;
    transition: transform .3s ease-in-out;
    margin-bottom: 27px;
    :active {
        transform: scale(0.97);
        opacity: 0.7;
    }
`

Wrapper.OrLoginWith = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #3D3D3D;
`

Wrapper.Or = styled(or)``

Wrapper.Google = styled(google)``
Wrapper.Facebook = styled(facebook)``

Wrapper.Text = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #727272;
`


Wrapper.Radios = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 27px;
`




export {Container, Wrapper, Title, Select, Input}