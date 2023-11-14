'use client'

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { InnerStyled } from './style/Styled'

interface SectionProps {
    $isOdd: boolean,
    children: ReactNode,
    id: string
}

const StyledSection= styled.section<SectionProps>`//제네릭 다시 보기
    ${InnerStyled}
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${(props)=> (props.$isOdd ? '#ECE7E1' : '#333')};
    color: ${(props)=> (props.$isOdd ? '#333' : '#ECE7E1')};
    /* height: 700px; */
    min-height: 100vh;
`

const Section = ({$isOdd, id, children}:SectionProps) => {
    return (
        <StyledSection $isOdd={$isOdd} id={id}>{children}</StyledSection>
    )
}

export default Section