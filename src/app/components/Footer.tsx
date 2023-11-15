'use client'

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.footer`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#F0F0F0 ;

    a {
        padding: 30px;
        transition: 0.5s;
        &:hover{
            transform: scale(1.1);
        }
    }
    img{
        border-radius:100%;
        width: 60px;
        height: 100%;
        
    }

    
`
const Footer = () => {
    return (
        <Container>
            <a href='https://github.com/lika-7' target="_blank"><Image width={0} height={0} alt={'git hub'} src={'/git-hub.png'} sizes='auto' /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhwhdtn93@gmail.com" target="_blank"><Image width={0} height={0} alt={'email'} src={'/email.png'} sizes='auto' /></a>
            <a href='https://lika7.tistory.com/' target="_blank"><Image width={0} height={0} alt={'tistory'} src={'/tistory.jpg'} sizes='auto' /></a>
        </Container>
    )
}

export default Footer