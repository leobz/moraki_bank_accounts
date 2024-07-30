import React from 'react';

const Index = ({accounts}) => {
    return (
        <div>
            <h1>Accounts</h1>
            {accounts.map(account => (
                <div key={account.id}>
                    <p>Name: {account.name}</p>
                    <p>ID: {account.id}</p>
                    <p>Account Number: {account.account_number}</p>
                    <p>Currency: {account.currency}</p>
                    <p>Balance: {account.balance}</p>
                    <p>Status: {account.account_status}</p>
                </div>
            ))}
        </div>
    );
};

export default Index;