import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Contents = styled.ul`
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 45px;
    flex-direction: row;
    font-size: 35px;
    font-weight: 900;

    li >a{
        &.active {
        color: #FFB6C1; // 활성 섹션에 대한 색상 지정
        }
    }

    &:hover{
        cursor: pointer;
    }
`
interface ItemsProp {
    items: string[]
}

const NavItem = ({items}:ItemsProp) => {
    
    return (
        <Contents>
            {items.map((item, i)=>(
                <li key={i} >
                    <Link
                        activeClass="active"
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {item}
                    </Link>
                </li>
            ))}
        </Contents>
    )
}

export default NavItem