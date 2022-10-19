import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 100px;
    margin-bottom: 138px;

    @media (max-width: 1350px) {
        grid-gap: 30px;
    }

    @media (max-width: 920px) {
        grid-gap: 20px;
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 470px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

const Box = styled.div`
    display: flex;
    align-items: center;
    background: #FBFBFB;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

Box.ImageWrapper = styled.div`

`

Box.ImageWrapper.Image = styled.img`
    @media (max-width: 1350px) {
        width: 252px;
        height: 252px;
    }

    @media (max-width: 1020px) {
        width: 220px;
        height: 220px;
    }
`

Box.Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 50px;

    @media (max-width: 1350px) {
        padding: 30px;
    }

    @media (max-width: 1020px) {
        padding: 20px;
    }

    @media (max-width: 900px) {
        align-items: center;
    }
    
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

    @media (max-width: 1110px) {
        font-weight: 800;
        font-size: 18px;
        line-height: 28px;
    }

    @media (max-width: 920px) {
        font-size: 17px;
        line-height: 26px;
    }

    @media (max-width: 900px) {
        text-align: center;
    }
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

    @media (max-width: 1110px) {
        font-size: 12px;
        margin-top: 14px;
        margin-bottom: 16px;
    }

    @media (max-width: 920px) {
        font-size: 12px;
        margin-top: 12px;
        margin-bottom: 14px;
    }

    @media (max-width: 900px) {
        text-align: center;
    }
`


export {Container, Box}