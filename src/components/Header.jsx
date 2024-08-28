import styled from 'styled-components'
import { Colors } from './Colors'

const StyledHeader = styled.div`
    background-color: ${Colors.darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    img {
        width: 50%;
        max-width: 200px;
        margin: 10px;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        width: 50%;
        min-width: 250px;
        max-width: 400px;
        a {
           margin-bottom: 30px;
           color: white;
           text-decoration: none;
           font-weight: 700;
           font-size: 20px;
        }
    }

`

export default function Header() {
    return(
        <StyledHeader>
            <img src="/src/assets/imagens/logo.png" alt="Logo"/>
            <nav>
                <a href="/burgers">Burgues</a>
                <a href="/burgers">Burgues</a>
                <a href="/burgers">Burgues</a>
                <a href="/burgers">Burgues</a>
            </nav>
        </StyledHeader>
    )
}