import { Link } from "@inertiajs/react"

const onDestroy = (e) => {
  if (!confirm('Are you sure you want to delete this account?')) {
    e.preventDefault()
  }
}

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
        <a href={`/accounts/${account.id}/edit`}>Edit account</a>
        <br/>
        <a href={`/accounts`}>Back to accounts</a>
        <br/>
        <Link
          href={`/accounts/${account.id}`}
          onClick={onDestroy}
          as="button"
          method="delete"
        > Destroy this account</Link>
    </div>
  </div>
)
}

export default Show;