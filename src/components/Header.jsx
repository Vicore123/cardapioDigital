import styled from 'styled-components'
import { Colors } from './Colors'
import React, { useState, useEffect } from 'react'
import CartCard from './CartCard'

const StyledHeader = styled.div`
    background-color: ${Colors.darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        padding-bottom: 0px;
    }
`

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
`

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
`

const CloseButton = styled.button`
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    background: transparent;
    border: none;
    cursor: pointer;

    &.closed {
        display: none;
    }
`

const Logo = styled.img`
    margin: 10px;
    width: 200px;
`

const CartButton = styled.button`
    background-color: transparent;
    color: white;
    position: absolute;
    top: 40px;
    right: 40px;
    border: none;
    cursor: pointer;
`

const CartSidebar = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 60px 20px;
    top: 0;
    right: -35%;
    width: 35%;
    height: 100%;
    background: #333;
    transition: right 0.3s;
    overflow: hidden;
    z-index: 999; 

    @media (max-width: 768px) {
        right: -250px;
        width: 250px;
    }

    &.open {
        right: 0;
    }
`

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const toggleSidebar = () => {
        setMenuIsOpen(!menuIsOpen)
        setCartIsOpen(false)
    }

    const toggleCart = () => {
        setCartIsOpen(!cartIsOpen)
        setMenuIsOpen(false)
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const isClickOutsideMenu = menuIsOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-button")
            const isClickOutsideCart = cartIsOpen && !event.target.closest(".cart-sidebar") && !event.target.closest(".cart-button")

            if (isClickOutsideMenu) {
                setMenuIsOpen(false)
            }
            if (isClickOutsideCart) {
                setCartIsOpen(false)
            }
        }

        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [menuIsOpen, cartIsOpen])

    return (
        <StyledHeader>
            <MenuButton onClick={toggleSidebar} className="menu-button">
                ☰
            </MenuButton>

            <Logo src="/src/assets/imagens/logo.png" alt="Logo" />

            <CartButton onClick={toggleCart} className="cart-button">
                <img src="src/assets/imagens/icones/shopping-cart.png" alt="Cart" width={35} />
            </CartButton>

            <Sidebar className={`sidebar ${menuIsOpen ? 'open' : ''}`}>
                <CloseButton onClick={toggleSidebar} className={menuIsOpen ? '' : 'closed'}>×</CloseButton>
                <a href="">Burgers</a>
                <a href="">Acompanhamentos</a>
                <a href="">Bebidas</a>
            </Sidebar>

            <CartSidebar className={`cart-sidebar ${cartIsOpen ? 'open' : ''}`}>
                <CloseButton onClick={toggleCart} className={cartIsOpen ? '' : 'closed'}>×</CloseButton>
                <CartCard imgSource="src\assets\imagens\burger01.png"></CartCard>
            </CartSidebar>
        </StyledHeader>
    )
}
