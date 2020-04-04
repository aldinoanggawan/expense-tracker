import React from 'react'

const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? "+" : "-"
    const indicator = transaction.amount > 0 ? "plus" : "minus"
    return(
        <li className={indicator}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction