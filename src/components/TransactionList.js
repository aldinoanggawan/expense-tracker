import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalState'

import Transaction from './Transaction'

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

        &:hover .delete-btn {
            opacity: 1;
        }
    }

    .plus {
        border-right: 5px solid #2ecc71;
    }

    .minus {
        border-right: 5px solid #c0392b;
    }

    .delete-btn {
        cursor: pointer;
        background-color: #e74c3c;
        border: 0;
        color: #fff;
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        padding: 2px 5px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`

const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions()
    }, [])
    
    return(
        <>
            <H3>History</H3>
            <Ul>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                {/* <li className="plus">
                    Salary
                    <span> $100</span>
                    <button className="delete-btn">x</button>
                </li>
                <li className="minus">
                    Food
                    <span>$0</span>
                    <button className="delete-btn">x</button>
                </li> */}
            </Ul>
        </>
    )
}

export default TransactionList