import styled from "styled-components";

const Container = styled.div`
    max-width: 1920px;
    min-width: 428px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    @media (max-width: 1200px) {
        padding: 0 18px;
    } 
    
    @media (max-width: 500px) {
        padding: 0 8px;
    }

    @media (max-width: 428px) {
        padding: 0;
    }
`

export {Container}