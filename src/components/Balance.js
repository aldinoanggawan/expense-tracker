import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalState'

const Div = styled.div`
    h4 {
        margin: 0;
        text-transform: uppercase;
    }

    h1 {
        margin: 0;
        letter-spacing: 1px;
    }
`

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount) //amounts is an array of each amount
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return(
        <Div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </Div>
    )
}

export default Balance