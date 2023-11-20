'use client'
import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Image from 'next/image'

interface ImageCardProps {
    img: string | null
    title: string
    categories: string[]
    src: string
    hash: string | null
}

const blink = keyframes`
    0%, 50%, 100% {
        border: 3px dashed #ff8c69;
    }
    25%, 75% {
        border: 3px dashed transparent;
    }
`

const Container = styled.a<{$select: boolean}>`
    display:block;
    color:#333;
    text-decoration:none;
    font-family: sans-serif;
    font-weight: 500;
    width: 450px;
    border-radius: 20px;
    border: 3px solid transparent;
    overflow: hidden;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);

    ${(props)=>(
        props.$select && 
        css`
            transition: border 0.3s ease-in-out;
            animation: ${blink} 2.5s infinite;
        `
    )};

    img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    transition: 0.5s;
    &:hover{
        transition: 0.5s;
        transform: scale(1.05);
    }
`

const Content = styled.div`
    /* margin-top: 0; */
    padding: 20px;
    background-color: #fff;

`

const Title = styled.div`
    font-size: 25px;
    min-height: 50px;
    margin-bottom: 15px;
`

const Description = styled.div`
    font-size: 20px;
    margin-bottom: 15px;
`

const Category = styled.ul`
    font-weight: 600;
    border-top: 1px solid #333;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    height: 100px;
    overflow-y: scroll;
    gap: 5px;
    li {
        padding: 8px;
        height: 15px;
        margin-top:10px;
        background-color: #eee;
        border-radius: 8px;
    }
`

const ImageCard = ({ img, title, categories, src, hash }:ImageCardProps) => {
    const [select, setSelect] = useState<boolean>(false)
    const [hashedUrl, setHashedUrl] = useState<string>()
    const [srcUrl, setSrcUrl] = useState<string>()

    useEffect(() => {
        hash ? setHashedUrl(hash.replace('#','')) : ''
        src ? setSrcUrl(src.replace('https://','')) : ''
        if(hashedUrl && srcUrl && hashedUrl===srcUrl){
            console.log('hash', hashedUrl)
            setSelect(true)
            const targetElement = document.getElementById(hashedUrl);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }

    },[hashedUrl, srcUrl])

    const handleClick= () =>{
        setSelect(false)
    }

    return (
        <Container id = {srcUrl} href={src} target="_blank" $select={select} onClick={handleClick}>
            <Image src={img || '/logo.png'} alt={title} width={0} height={0} sizes='auto'/>
            <Content>
                <Title>{title}</Title>
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