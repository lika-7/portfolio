'use client'

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { InnerStyled } from './style/Styled'

interface SectionProps {
    $isOdd: boolean,
    children: ReactNode
}

const StyledSection= styled.section<SectionProps>`//제네릭 다시 보기
    ${InnerStyled}
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${(props)=> (props.$isOdd ? '#ECE7E1' : '#333')};
    color: ${(props)=> (props.$isOdd ? '#333' : '#ECE7E1')};
    height: 700px;
`

const Section = ({$isOdd, children}:SectionProps) => {
    return (
        <StyledSection $isOdd={$isOdd}>{children}</StyledSection>
    )
}

export default Section