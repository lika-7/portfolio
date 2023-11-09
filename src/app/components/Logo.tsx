import React from 'react'
import styled from 'styled-components'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '700'
})

const LogoContainer = styled.h1`
    font-size: 45px; 
`


const Logo = () => {
    return (
        <LogoContainer className={montserrat.className}>
            LIKA-7
        </LogoContainer>
    )
}

export default Logo