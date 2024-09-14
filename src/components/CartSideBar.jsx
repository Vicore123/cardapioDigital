import Card from "./Card"
import styled from "styled-components"

const StyledCartSidebar = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 40px 20px;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100%;
    background: #333;
    transition: right 0.3s;
    overflow: hidden;
    z-index: 999; 

    &.open {
        right: 0;
    }
`

export default function CartSidebar() {
    return (
        <StyledCartSidebar>
            <Card></Card>
        </StyledCartSidebar>
    )
}