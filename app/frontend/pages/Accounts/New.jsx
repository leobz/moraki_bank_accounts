import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function New({ account }) {
  return (
      <>
        <Head title="New account" />
        <h1>New account</h1>

        <Form
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
        </div>
      </>
    )
}