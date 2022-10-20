import styled from "styled-components";
import {ReactComponent as arrowright} from '../../../assets/icons/arrow-right.svg'

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 116px;

    @media (max-width: 470px) {
        margin-top: 30px;
    }

    @media (max-width: 350px) {
        margin-top: 0px;
    }
`

const Wrapper = styled.div`
    width: 100%;
`

Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 16px;
    text-align: center;
    color: #3D3D3D;
    margin-bottom: 15px;

    @media (max-width: 470px) {
        font-size: 22px;
    }

    @media (max-width: 350px) {
        font-size: 20px;
    }
`

Wrapper.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #727272;
    margin-bottom: 35px;

    @media (max-width: 470px) {
        font-size: 12px;
        width: 90%;
        text-align: center;
        margin: auto;
        margin-bottom: 25px;
    }

    @media (max-width: 350px) {
        font-size: 12px;
    }
`

Wrapper.Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 45px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 30px;
    }

    @media (max-width: 1200px) {
        grid-column-gap: 20px;
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 20px;
    }

    @media (max-width: 800px) {
        grid-column-gap: 20px;
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 30px;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
    }

    @media (max-width: 470px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 20px;
    }
`

Wrapper.Post = styled.div`
    width: 100%;

    @media (max-width: 470px) {
        width: 80%;
        margin: auto;
    }

    @media (max-width: 350px) {
        width: 90%;
        margin: auto;
    }
`

Wrapper.Post.ImageWrapper = styled.div`
    width: 100%;
`

Wrapper.Post.Image = styled.img`
    width: 100%;
`

Wrapper.Post.Details = styled.div`
    padding: 8px 15px;
`

Wrapper.Post.Date = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #46A358;
    margin: 0px 0px 4px 0px;
`

Wrapper.Post.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #3D3D3D;
    margin-bottom: 4px;

    @media (max-width: 1300px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media (max-width: 006px) {
        font-size: 16px;
        line-height: 24px;
    }
`

Wrapper.Post.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #727272;
    margin-bottom: 9px;

    @media (max-width: 1300px) {
        font-size: 12px;
        line-height: 20px;
    }
`

Wrapper.Post.Button = styled.div`

`

Wrapper.Post.Icon = styled(arrowright)`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #3D3D3D;
`

export {Container, Wrapper}