import AccountForm from '../components/AccountForm'
import TitleWithLink from '../components/TitleWithLink'

export default function New({ account }) {
  return (
    <>
      <TitleWithLink title="New Account" linkText="Back to accounts" linkUrl="/accounts" />
      <AccountForm />

      {/* <Form
        account={account}
        onSubmit={(form) => {
          form.transform((data) => ({ account: data }))
          form.post('/accounts')
        }}
        submitText="Create account"
      />

      <br/>

      <div>
        <Link href="/accounts">Back to accounts</Link>
      </div> */}
    </>
  )
}