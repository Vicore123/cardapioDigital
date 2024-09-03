import styled from 'styled-components';
import { Colors } from './Colors';
import React, { useState } from 'react';

// Estilize os componentes
const StyledHeader = styled.div`
    background-color: ${Colors.darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        padding-bottom: 0px;
    }
    
`;

const MenuButton = styled.button`
    display: none;
    
    @media (max-width: 768px) {
        
        color: white;
        display: block;        
        position: fixed;
        top: 40px;
        left: 40px;
        font-size: 24px;
        background: transparent;
        border: none;
        cursor: pointer;
    }
`;

const Sidebar = styled.div`
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        padding: 40px 20px;
        top: 0;
        left: -250px;
        width: 250px;
        height: 100%;
        background: #333;
       
        transition: left 0.3s;
        overflow: hidden;
        z-index: 999; 
    }

    &.open {
        left: 0;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        margin: 10px;
    }
`;

const CloseButton = styled.button`
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: transparent;
    border: none;
    cursor: pointer;

    &.closed {
        display: none;
    }
`;

const Logo = styled.img`
    
    margin: 10px;
    width: 200px;
`;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <StyledHeader>
            <Logo src="/src/assets/imagens/logo.png" alt="Logo"/>
            <MenuButton onClick={toggleSidebar}>
                ☰
            </MenuButton>
            <Sidebar className={isOpen ? 'open' : ''}>
                <CloseButton onClick={toggleSidebar} className={isOpen ? '' : 'closed'}>×</CloseButton>
                <a href="">Burgers</a>
                <a href="">Acompanhamentos</a>
                <a href="">Bebidas</a>
                
            </Sidebar>
            
        </StyledHeader>
    );
}
