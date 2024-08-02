import AccountForm from '../components/AccountForm'
import HeadMenu from '../components/HeadMenu'

export default function New({ account, currencies}) {
  return (
    <>
      <HeadMenu title="New Account" linkText="Back to accounts" linkUrl="/accounts" />
      <AccountForm
        account={account}
        currencies={currencies}
        submitText={"Create Account"}
        onSubmit={(form) => {
          form.transform((data)=> ({account: data}))
          form.post(`/accounts`)
        }}
    />
    </>
  )
}