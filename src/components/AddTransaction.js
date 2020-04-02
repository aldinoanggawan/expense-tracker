import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
`

const Form = styled.form`
    div label {
        display: inline-block;
        margin: 10px 0;
    }

    div .text,
    div .number {
        display: block;
        border: 1px solid #dedede;
        border-radius: 2px;
        font-size: 16px;
        padding: 10px;
        width: 100%;
    }
    
    div .submit {
        cursor: pointer;
        background-color: #9c88ff;
        box-shadow: var(--box-shadow);
        color: #fff;
        border: 0;
        display: block;
        font-size: 16px;
        margin: 10px 0 30px;
        padding: 10px;
        width: 100%;
    }
`

const AddTransaction = () => {

    return(
        <>
            <H3>Add new transaction</H3>
            <Form>
                <div>
                    <label htmlFor="text">Text</label>
                    <input className="text" id="text" type="text" placeholder="Enter text"></input>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input className="number" id="amount" type="number" placeholder="Enter amount"></input>
                </div>
                <div>
                    <input className="submit" type="submit" value="Add transaction" />
                </div>
            </Form>
        </>
    )
}


export default AddTransaction