'use client'

import React from 'react'
import ImageCard from './../ImageCard';
import styled from 'styled-components';
import { SectionStyled } from '../style/Styled';

const Container = styled.div`
  ${SectionStyled}
  display:flex;
`

const Project = () => {
  const [img,title,description,categories]= ['/123','프로젝트 이름','프로젝트의 설명을 적습니다',['node','사물 인터넷']]
  return (
    <Container>
      <ImageCard img ={img} title ={title} description ={description} categories ={categories}  />
      <ImageCard img ={img} title ={title} description ={description} categories ={categories}  />
      <ImageCard img ={img} title ={title} description ={description} categories ={categories}  />
    </Container>
  )
}

export default Project