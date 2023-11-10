import React from 'react'
import styled from 'styled-components'

const Contents = styled.ul`
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 45px;
    flex-direction: row;
   font-size: 35px;
   font-weight: 900;
`
interface ItemsProp {
    items: string[]
}

const NavItem = ({items}:ItemsProp) => {
    
    return (
        <Contents>
            {items.map((item, i)=>(
                <li key={i}>
                    {item}
                </li>
            ))}
        </Contents>
    )
}

export default NavItem