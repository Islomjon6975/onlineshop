import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 100px;
    margin-bottom: 138px;
`

const Box = styled.div`
    display: flex;
    align-items: center;
    background: #FBFBFB;
`

Box.ImageWrapper = styled.div`

`

Box.ImageWrapper.Image = styled.img`

`

Box.Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 50px;
`

Box.Content.Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
    line-height: 31px;
    color: #3D3D3D;
    text-transform: uppercase;
    max-width: 220px;
    text-align: right;
`

Box.Content.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #727272;
    margin-top: 15px;
    margin-bottom: 18px;
    max-width: 290px;
    text-align: right;
`


export {Container, Box}