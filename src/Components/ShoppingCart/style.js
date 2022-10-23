import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    margin-top: 51px;
    display: flex;
    gap: 81px;
`

const Left = styled.div`
    flex: 1
`

Left.Table = styled.table`
    width: 100%;
`

Left.Thead = styled.thead`

`

Left.Tr = styled.tr`
    display: grid;
    grid-template-columns: 1fr 100px 100px 100px 30px;
`

Left.Th = styled.th`
    display: flex;
    justify-content: flex-start;
`

const Right =  styled.div`
    width: 328px;
`

export {Container, Wrapper, Left, Right}