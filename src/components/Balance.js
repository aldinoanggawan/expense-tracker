import React from 'react'
import styled from 'styled-components'

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
    return(
        <Div>
            <h4>Your Balance</h4>
            <h1>$100</h1>
        </Div>
    )
}

export default Balance