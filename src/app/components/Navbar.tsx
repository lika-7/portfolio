'use client'

import React from 'react'
import styled, { css } from 'styled-components';
import NavItem from './NavItem';
import Logo from './Logo';
import { InnerStyled } from './style/Styled';

const Container = styled.nav`
    ${InnerStyled};
    background-color: #333;
    position:sticky;
    font-size: 30px;
    color: #ECE7E1;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const Navbar = () => {
    const items= ['About me', 'Skill', 'Project', 'Career']
    return (
        <div>
            <Container>
                <Logo />
                <NavItem items={items}/>
            </Container>
        </div>
    )
}

export default Navbar