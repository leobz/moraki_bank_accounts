import AccountForm from '../components/AccountForm'
import TitleWithLink from '../components/TitleWithLink'

export default function Edit({account}) {
  return (
    <>
    <TitleWithLink title="Edit Account" linkText="Back to account" linkUrl="/accounts/{id}" />
    <AccountForm />
{/* <      <Head title="Update account" />
      <h1>Edit Account</h1>

      <Form
        account={account}
        onSubmit={(form) => {
          form.transform((data) => ({ account: data }))
          form.patch(`/accounts/${account.id}`)
        }}
        submitText="Update Account"
      />

      <br/>
      <Link href={`/accounts/${account.id}`}>Show this account</Link>
      <br/>
      <Link href="/accounts">Back to accounts</Link>> */}
    </>
  )
}