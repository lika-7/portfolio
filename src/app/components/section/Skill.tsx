'use client'

import { coverage, skill } from '@/app/categories/information'
import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../style/Styled'

const Container = styled.div`
  ${SectionStyled}
  
  h1{
    font-weight: 600;
    font-size: 40px;
    color:#FFD700;
    margin-bottom: 60px;
  }
  ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    font-family: sans-serif;
    margin-bottom: 100px;
  }

  li{
    font-weight:600;
    font-size:20px;
    background-color: #ececea;
    padding: 15px;
    border-radius: 30px;
    border: 2px solid #FFD700;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.5);
    
  }
`
const SkillList = styled.div`
  h2 {
    margin-left: 30px;
    font-weight: 600;
    font-size: 30px;
    color:#FFF;
  }
  hr {
    margin-bottom: 30px;
  }
  ul {
    justify-content: left;
    margin-left: 0;
  }

`

const Skill = () => {
  return (
    <Container>
      <h1>개발 커버리지</h1>
      <ul>
        {coverage.map((item, i)=>(<li key={i}>{item}</li>))}
      </ul>
      <h1>기술 스택</h1>
      {skill.map((item, i) => {
        const [category, items] = Object.entries(item)[0]
        return (
          <SkillList key={i}>
            <h2>{category}</h2>
            <hr />
            <ul>
              {Array.isArray(items) &&
                  items.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
            </ul>
          </SkillList>
        )
      })}

      
    </Container>
  )
}

export default Skill