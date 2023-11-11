'use client'

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface ImageCardProps {
    img: string
    title: string
    description: string
    categories: string[]
}

const Container = styled.div`
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
    transition: 0.5s;
    img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        
    }
`

const Content = styled.div`
    padding: 20px;
    background-color: #fff;
`

const Title = styled.div`
    font-size: 25px;
    margin-bottom: 15px;
`

const Description = styled.div`
    font-size: 20px;
    margin-bottom: 15px;
`

const Category = styled.ul`
    font-family: sans-serif;
    font-weight: 600;
    border-top: 1px solid #333;
    display:flex;
    flex-direction: row;
    gap: 5px;
    li {
        padding: 8px;
        margin-top:10px;
        background-color: #eee;
        border-radius: 8px;
    }
`

const ImageCard = ({img,title,description,categories}:ImageCardProps) => {
    return (
        <Container>
            <Image src={'/logo.png'} alt={title} width={1000} height={1000}/>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Category>
                    {categories.map((category, i)=>(
                        <li key={i}>{category}</li>
                    ))}
                </Category>
            </Content>
        </Container>
    )
}

export default ImageCard