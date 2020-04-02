import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
`
const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;

    li {
        background-color: #fff;
        box-shadow: var(--box-shadow);
        color: #333;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 10px;
        margin: 10px 0;
    }
`

const TransactionList = () => {
    return(
        <>
            <H3>History</H3>
            <Ul>
                <li className="plus">
                    Salary
                    <span> $100</span>
                </li>
                <li className="minus">
                    Food
                    <span>$0</span>
                </li>
            </Ul>
        </>
    )
}

export default TransactionList