import Form from './Form'
import { Link, Head } from '@inertiajs/react'

export default function Edit({account}) {
  return (
    <>
      <Head title="Update account" />
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
      <Link href="/accounts">Back to accounts</Link>
    </>
  )
}