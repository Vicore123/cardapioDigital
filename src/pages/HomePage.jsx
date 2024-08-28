import styled from "styled-components";
import Card from "../components/card";

const StyledHomePage = styled.div`
    background-color: aliceblue;
`
export default function HomePage() {
    return (
        <StyledHomePage>
            <Card/>
            <Card/>
            <Card/>
        </StyledHomePage>
    )
}