import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalState'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: var(--box-shadow);
    padding: 20px;
    margin-top: 20px;

    div {
        flex: 1;
        text-align: center;

        &:first-of-type {
            border-right: 1px solid #dedede;
        }
    }

    div h4 {
        text-transform: uppercase;
        margin: 1px;
        padding: 1px;
    }

    div p {
        margin: 1px;
        padding: 1px;
    }

    div .plus {
        color: #2ecc71;
    }

    div .minus {
        color: #c0392b;
    }
`

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2)

    return(
        <Container>
            <div>
                <h4>Income</h4> 
                <p className="plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="minus">${Math.abs(expense)}</p>
            </div>
        </Container>
    )
}

export default IncomeExpense