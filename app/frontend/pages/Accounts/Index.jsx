import IndexCards from '../components/IndexCards'
import TitleWithLink from '../components/TitleWithLink'

const Index = ({accounts}) => {
  return(
    <div>
      <TitleWithLink title="All Accounts" linkText="Create new account" linkUrl="/accounts/new" />
      <IndexCards />
    </div>
    )
};

// {accounts.map(account => (
//   <div key={account.id}>
//       <p>
//           ID: {account.id} { account.is_default ? <strong>(Default Account)</strong> : null }
//       </p>
//       <p>Name: {account.name}</p>
//       <p>Account Number: {account.account_number}</p>
//       <p>Currency: {account.currency}</p>
//       <p>Balance: {account.balance}</p>
//       <p>Status: {account.status}</p>
//       <a href={`/accounts/${account.id}`}>Go to account</a>
//   </div>
// ))}

// <Link href="/accounts/new">Create account</Link>

export default Index;