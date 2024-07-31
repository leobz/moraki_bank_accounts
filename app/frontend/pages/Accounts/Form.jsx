import { useForm } from '@inertiajs/react'

export default function Form({ account, onSubmit, submitText }) {
  const form = useForm({
    name: account.name || '',
    status: account.status || '',
    currency: account.currency || '',
    balance: account.balance || '', // Only for test porposes. This field shouldn't be editable
  })

  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  const renderInputField = (name, label) => {
    return (
      <div>
        <label style={{ display: 'block' }} htmlFor={name}>{label}</label>
        <input type="text" name={name} id={name} value={data[name]} onChange={(e) => setData(name, e.target.value)}/>
        {errors[name] && (<div style={{ color: 'red' }}>{errors[name].join(', ')}</div>)}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderInputField('name', 'name')}
      {renderInputField('status', 'status')}
      {renderInputField('currency', 'currency')}
      {renderInputField('balance', 'balance')}

      <div>
        <button type="submit" disabled={processing}>
          {submitText}
        </button>
      </div>
    </form>
  )
}