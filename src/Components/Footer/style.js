import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icons/logo.svg'
import {ReactComponent as greenshop} from '../../assets/icons/greenshop.svg'
import {ReactComponent as location} from '../../assets/icons/location.svg'
import {ReactComponent as message} from '../../assets/icons/message.svg'
import {ReactComponent as call} from '../../assets/icons/call.svg'
import {ReactComponent as facebook} from '../../assets/icons/facebook-green.svg'
import {ReactComponent as instagram} from '../../assets/icons/instagram.svg'
import {ReactComponent as twitter} from '../../assets/icons/twitter.svg'
import {ReactComponent as linkedin} from '../../assets/icons/linkedin.svg'
import {ReactComponent as union} from '../../assets/icons/union.svg'

const Container = styled.div`
    width: 100%;
    background: #FBFBFB;
`

const GreenArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    background: rgba(70, 163, 88, 0.1);
    padding: 27px 23px;
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

GreenArea.LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 500px) {
       justify-content: center;
    }
`

GreenArea.Logo = styled(logo)``
GreenArea.Greenshop = styled(greenshop)``
GreenArea.Location = styled(location)``
GreenArea.Message = styled(message)``
GreenArea.Call = styled(call)``

GreenArea.Title = styled.div`
    max-width: 185px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #3D3D3D;
    margin-left: 6px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 33px 23px 27px 23px;
    border-bottom: 1px solid rgba(70, 163, 88, 0.2);;

    @media (max-width: 630px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

Wrapper.Column = styled.div`
    display: flex;
    flex-direction: column;
`

Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 10px;
`

Wrapper.Items = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

Wrapper.Item = styled.li`
    list-style-type: none;
`

Wrapper.Link = styled.a`
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #3D3D3D;
`

Wrapper.Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 33px;
`

Wrapper.Social = styled.a`
    width: 30px;
    height: 30px;
    border: 1px solid rgba(70, 163, 88, 0.2);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`

Wrapper.Facebook = styled(facebook)``
Wrapper.Instagram = styled(instagram)``
Wrapper.Twitter = styled(twitter)``
Wrapper.Linkedin = styled(linkedin)``
Wrapper.Union = styled(union)``

Wrapper.Payments = styled.img`
    width: 224px;
    height: 26px;
`

const Copyright = styled.div`
    background: #FBFBFB;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #3D3D3D;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {Container, Wrapper, GreenArea, Copyright}