import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount > 0 ? "+" : "-"
    const indicator = transaction.amount > 0 ? "plus" : "minus"

    const handleClick = () => {
        deleteTransaction(transaction.id)
    }

    return(
        <li className={indicator}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={handleClick}>x</button>
        </li>
    )
}

export default Transaction