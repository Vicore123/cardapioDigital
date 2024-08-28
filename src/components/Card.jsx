import styled from "styled-components";

const StyledCard = styled.div`
    background-color: beige;
    height: 100px;
    width: 50px;
    margin: 10px;
`

export default function Card() {
    return(
        <StyledCard>
            <h1>Cards</h1>
        </StyledCard>
    )
}