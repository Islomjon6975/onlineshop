import styled from "styled-components";
import {ReactComponent as line} from '../../assets/icons/line.svg'

const Container = styled.div`
    width: 500px;
    height: 656px;
    background: #FFFFFF;
    padding: 52px 100px 40px 100px;
    border: 1px solid black;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #3D3D3D;
`

const Register = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #46A358;
`

const Line = styled(line)``

const Subtitle = styled.div`
    font-size: 13px;
    line-height: 400;
    color: #3D3D3D;
    margin-top: 40px;
    margin-bottom: 14px;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    padding-left: 14px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
`

export {Container, Wrapper, Title, Register, Line, Subtitle,InputWrapper, Input}