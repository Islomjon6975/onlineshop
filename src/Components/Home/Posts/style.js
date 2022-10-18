import styled from "styled-components";
import {ReactComponent as arrowright} from '../../../assets/icons/arrow-right.svg'

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    margin-bottom: 116px;
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
`

Wrapper.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #727272;
    margin-bottom: 35px;
`

Wrapper.Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 45px;
`

Wrapper.Post = styled.div`
    width: 100%;
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
`

Wrapper.Post.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #727272;
    margin-bottom: 9px;
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