'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SectionStyled } from '../style/Styled'


const Container = styled.div`
    ${SectionStyled}
    top:0;
    bottom:0;
    margin: auto 0;
    display:flex;
    justify-content: space-evenly;
    text-align: right;
    height: 500px;
    h2 {
        font-size: 60px;
        font-weight: 600;
    }

    p {
        font-size: 30px;
        font-weight: 600;
    }
`

const SectionOne = styled.div`
    display: flex;
    flex-direction: column;

    img{
        border-radius: 50px;
        width: 500px;
        height: 650px;
        overflow: hidden;
        object-fit: cover;
    }

    h1{
        margin-top: 20px;
        
    }

`

const SectionTwo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    h2 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 15px;
    }

    a {
        font-size:60px;
        color: #82966f;
        text-decoration:none;
        &:hover{
            color: #F08080;
        }
    }
    
    
`

const About = () => {
    return (
        <div>
            <Container>
                <SectionOne>
                    <Image src={'/logo.png'} alt="logo-img" width={0} height={0} sizes='auto'/>
                </SectionOne>
                <hr />
                <SectionTwo>
                    <h2>오종수</h2>
                    <p><span>직업: </span>프리랜서 개발자</p>
                    <p><span>거주지: </span>경기도 일산</p>
                    <p>
                        <a 
                            
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhwhdtn93@gmail.com" 
                            target="_blank">contact. gmail
                        </a>
                    </p>
                </SectionTwo>
            </Container>
        </div>
        
    )
}

export default About