'use client'
import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem';
import Logo from './Logo';
import { InnerStyled } from './style/Styled';

interface NavbarProps {
    categories: string[]
}

const Container = styled.nav`
    ${InnerStyled}
    top:0;
    background-color: #333;
    position:sticky;
    font-size: 30px;
    color: #F0F8FF;
    display:flex;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0 2px 4px #ffffff;
    z-index: 999;
`

const Navbar = ({categories}:NavbarProps) => {
    return (
        <Container>
            <Logo />
            <NavItem items={categories}/>
        </Container>
    )
}

export default Navbar