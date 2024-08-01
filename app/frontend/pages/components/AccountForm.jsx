import React from 'react';
import { useForm } from '@inertiajs/react';
import { InputField, CheckboxField, SelectField } from './FormFields';

const AccountForm = ({ account, onSubmit, submitText }) => {
  const form = useForm({
    name: account.name || '',
    status: account.status || '',
    currency: account.currency || '',
    is_default: account.is_default || '',
    balance: account.balance || '', // Only for test purposes. This field shouldn't be editable
  });

  const { data, setData, errors, processing } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handleChange = (name) => (e) => {
    const { type, checked, value } = e.target;
    setData(name, type === 'checkbox' ? checked : value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <SelectField
          name="selectedOption"
          label="Selector"
          value={data.selectedOption}
          onChange={handleChange('selectedOption')}
          options={['option1', 'option2', 'option3']}
          error={errors.selectedOption}
        />
        <InputField
          name="name"
          label="Account name"
          value={data.name}
          onChange={handleChange('name')}
          error={errors.name}
        />
        <InputField
          name="status"
          label="Account status"
          value={data.status}
          onChange={handleChange('status')}
          error={errors.status}
        />
        <InputField
          name="currency"
          label="Currency"
          value={data.currency}
          onChange={handleChange('currency')}
          error={errors.currency}
        />
        <InputField
          name="balance"
          label="Balance"
          value={data.balance}
          onChange={handleChange('balance')}
          error={errors.balance}
        />
        <CheckboxField
          name="is_default"
          label="Default account"
          checked={data.is_default}
          onChange={handleChange('is_default')}
          error={errors.is_default}
        />
        <button
          type="submit"
          disabled={processing}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
