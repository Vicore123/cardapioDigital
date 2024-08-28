import styled from "styled-components";
import Card from "../components/card";

const StyledBurgers = styled.div`
    background-color: aliceblue;
`
export default function Burgers() {
    return (
        <StyledBurgers>
            <Card/>

        </StyledBurgers>
    )
}