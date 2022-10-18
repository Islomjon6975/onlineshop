import styled, {css} from "styled-components";

const common = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    /* height: 450px; */
    background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
    margin-top: 12px;
    padding: 0 50px;

    .swiper-pagination-bullet-active {
        background: #46A358 !important;
    }

    .swiper-pagination-bullet {
        background: #46A358 !important;
    }

    @media (max-width: 1280px) {
        padding: 0 40px;
    }

    @media (max-width: 1030px) {
        padding: 0 30px;
        padding: 43px 40px;
    }

    @media (max-width: 834px) {
        padding: 43px 20px;
    }

    @media (max-width: 428px) {
        padding: 43px 16px;
    }

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

Wrapper.Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (max-width: 500px) {
        flex: 1.4;
    }
`

Wrapper.Subtitle = styled.p`
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3D3D3D;
    margin-bottom: 10px;

    @media (max-width: 1280px) {
        margin-bottom: 7px;
    }

    @media (max-width: 834px) {
        margin-bottom: 5px;
        font-size: 13px;
    }

    @media (max-width: 500px) {
        font-size: 12px;
    }

    @media (max-width: 428px) {
        margin-bottom: 0;
        font-size: 11px;
    }
`

Wrapper.Title = styled.h1`
    font-weight: 900;
    max-width: 575px;

    span {
        color: #46A358
    }

    @media (max-width: 1200px) {
        font-size: 60px;
    }

    @media (max-width: 1100px) {
        font-size: 55px;
        line-height: 60px;
    }

    @media (max-width: 1010px) {
        font-size: 50px;
        line-height: 60px;
    }

    @media (max-width: 930px) {
        font-size: 45px;
        line-height: 50px;
    }

    @media (max-width: 834px) {
        font-size: 30px;
        line-height: 35px;
    }

    @media (max-width: 500px) {
        font-size: 26px;
        line-height: 32px;
    }

    @media (max-width: 428px) {
        font-size: 24px;
        line-height: 29px;
    }
`

Wrapper.Description = styled.p`
    max-width: 557px;
    margin-bottom: 44px;
    margin-top: 10px;

    @media (max-width: 1280px) {
        margin-bottom: 30px !important;
        margin-top: 7px;
    }

    @media (max-width: 834px) {
        margin-top: 5px;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 13px;
        height: 37px;
        overflow: hidden;
    }

    @media (max-width: 500px) {
        font-size: 12px;
    }

    @media (max-width: 428px) {
        font-size: 11px;
        line-height: 18px;
        margin-top: 3px;
        margin-bottom: 11px;
        height: 37px;
    }
    
`

Wrapper.Right = styled.div`
    ${common }
    flex: 1;
    overflow: hidden;
    @media (max-width: 1200px) {
        justify-content: flex-end;
    }

`

Wrapper.ImageWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
`

Wrapper.ImgOne = styled.img`
    width: 518px;
    height: 518px;

    @media (max-width: 1200px) {
        width: 440px;
        height: 440px;
    }

    @media (max-width: 1010px) {
        width: 350px;
        height: 350px;
    }

    @media (max-width: 930px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 834px) {
        width: 225px;
        height: 225px;
    }

    @media (max-width: 600px) {

        width: 225px;
        height: 225px;
    }

    @media (max-width: 500px) {
        width: 215px;
        height: 215px;
        margin-right: -50px;
    }

    @media (max-width: 428px) {
        width: 213px;
        height: 213px;
        margin-right: -80px;
    }
`

Wrapper.ImgTwo = styled.img`
    position: absolute;
    right:340px;
    bottom: 35px;
    width: 135px;
    height: 135px;

    @media (max-width: 1200px) {
        right:270px;
        bottom: 20px;
    }

    @media (max-width: 1010px) {
        right:200px;
        bottom: 20px;
    }

    @media (max-width: 834px) {
        right:140px;
        bottom: 12px;
        width: 95px;
        height: 95px;
    }

    @media (max-width: 500px) {
        right:80px;
        width: 82px;
        height: 82px;
    }

    @media (max-width: 428px) {
        right:60px;
        width: 82px;
        height: 82px;
    }
`

export {Container, Wrapper}