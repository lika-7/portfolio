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
    color: #ECE7E1;
    display:flex;
    justify-content: space-between;
    align-items:center;
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