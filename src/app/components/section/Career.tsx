'use client'

import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../style/Styled'
import { careers, licence } from '@/app/categories/datas'

const Container = styled.div`
  ${SectionStyled}
  font-family: sans-serif;
  h1{
    color:#FFD700;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 45px;
  }
`
const CareerSection = styled.div`
  text-align: left;
  
`
const EducationSection = styled.div`
  text-align: right;
`

const Contents = styled.div`
  padding-left:40px;
  padding-right:40px;
  color:#CCC;
  span{
    
    color:#4CAF50;
    font-size: 30px;
    font-weight: 600;
    margin-right: 20px;
  }
  p{
    font-weight: 600;
    margin-bottom: 20px;
  }
  margin-bottom: 60px;
`
const Description = styled.p`
  color:#FFF;
  font-size: 20px;
  margin:25px;
`

const Career = () => {
  return (
    <Container>
      <CareerSection>
        <h1>
          Career
        </h1>
          {careers.map((item, i)=>(
            <Contents key={`careers${i}`}>
              <p><span>[ {item.company} ]</span>{item.period}</p>
              <Description>{item.description1}</Description>
              {item.description2? <Description>{item.description2}</Description> : ""}
            </Contents>
          ))}
      </CareerSection>
      <EducationSection>
        <h1>
          Education / License
        </h1>
            {licence.map((item,i)=>(
              <Contents key={`licence${i}`}>
                <p><span>[ {item.name} ]</span>{item.period}</p>
                <Description>{item.description1}</Description>
              </Contents>
            ))}
        
      </EducationSection>
    </Container>
  )
}

export default Career