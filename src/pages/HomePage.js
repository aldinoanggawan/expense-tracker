import React from 'react'
import styled from 'styled-components'

import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import TransactionList from '../components/TransactionList'
import AddTransaction from '../components/AddTransaction'
import Header from '../components/Header'

const Body = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
`

const Container = styled.div`
    margin: 30px auto;
    width: 350px;
`

const HomePage = () => {
    return(
        <Body>
            <Header />
            <Container>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </Container>
        </Body>
    )
}

export default HomePage