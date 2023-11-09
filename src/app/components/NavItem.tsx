import React from 'react'
import styled from 'styled-components'

const Contents = styled.ul`
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 45px;
    flex-direction: row;
   font-size: 30px;
   font-weight: 600;
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