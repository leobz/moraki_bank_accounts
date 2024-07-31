import { Link } from '@inertiajs/react'

const Index = ({accounts}) => {
    return (
        <div>
            <h1>Accounts</h1>
            {accounts.map(account => (
                <div key={account.id}>
                    <p>ID: {account.id}</p>
                    <p>Name: {account.name}</p>
                    <p>Account Number: {account.account_number}</p>
                    <p>Currency: {account.currency}</p>
                    <p>Balance: {account.balance}</p>
                    <p>Status: {account.status}</p>
                    <a href={`/accounts/${account.id}`}>Go to account</a>
                </div>
            ))}

            <Link href="/accounts/new">Create account</Link>
        </div>
    );
};

export default Index;