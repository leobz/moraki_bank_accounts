import React from "react";

const Show = ({ account }) => {
    return (
        <div>
            <h1>Account</h1>
            <div>
                <p>ID: {account.id}</p>
                <p>Name: {account.name}</p>
                <p>Account Number: {account.account_number}</p>
                <p>Currency: {account.currency}</p>
                <p>Balance: {account.balance}</p>
                <p>Status: {account.status}</p>
                <br/>
                <a href={`/accounts`}>Go to accounts</a>
                <br/>
                <a href={`/accounts/${account.id}/edit`}>Edit account</a>
            </div>
        </div>
    )
}

export default Show;