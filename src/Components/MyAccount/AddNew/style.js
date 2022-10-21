import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    max-width: 1100px;
    margin: auto;
    gap: 25px;
    margin-bottom: 100px;
`

Container.Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
`

Container.Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 28px;
`

Container.Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: #3D3D3D;

`

Container.Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #EAEAEA;
    border-radius: 3px;
    padding-left: 12px;
    :focus {
        outline: 1px solid #46A358;
    }
`

Container.Descs = styled.div`
    width: 100%;
`

Container.Textarea = styled.textarea`
    width: 100%;
    height: ${({height}) => height ? height : '63px'};
    :focus {
        outline: 1px solid #46A358;
    }
    resize: none;
    padding: 10px 12px;
`

Container.ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
`

Container.Image = styled.div`
    background: #C4C4C4;
    height: 203px;
`

export {Container}