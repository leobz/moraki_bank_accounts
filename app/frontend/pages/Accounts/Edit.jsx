import AccountForm from '../components/AccountForm'
import HeadMenu from '../components/HeadMenu'

export default function Edit({account, currencies}) {
  return (
    <>
      <HeadMenu title="Edit Account" linkText="Back to account" linkUrl={`/accounts/${account.id}`} />
      <AccountForm
        account={account}
        currencies={currencies}
        submitText={"Update Account"}
        onSubmit={(form) => {
          form.transform((data)=> ({account: data}))
          form.patch(`/accounts/${account.id}`)
        }}
      />
    </>
  )
}