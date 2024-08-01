import { Link } from "@inertiajs/react"
import React from 'react';
import TitleWithLink from '../components/TitleWithLink'

const FooterWithLinks = ({ linkTextLeft, linkUrlLeft, linkTextRight, linkUrlRight }) => {
  return (
    <div className="flex justify-end p-4 space-x-2">
      <Link href={linkUrlLeft} className="text-blue-500 hover:underline">{linkTextLeft}</Link>
      <Link href={linkUrlRight} className="text-blue-500 hover:underline">{linkTextRight}</Link>
    </div>
  );
};

const UserDatabase = () => {
  return (
    <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Account Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and information about the account.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Account Name
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              My account
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Account Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              550e8400-e29b-41d4-a716-446655440000
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Currency
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              USD
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Status
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Active
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Balance
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              1002,14 USD
            </dd>
          </div>
        </dl>
      </div>
      <FooterWithLinks linkTextLeft="Edit" linkUrlLeft="/accounts/1/edit" linkTextRight="Delete" linkUrlRight="/accounts/delete/{id}" />

    </div>
  );
};


const Show = ({ account }) => {
  const handleSubmit = () => {
    // Maneja el envío aquí
    console.log('Botón de envío clickeado');
  };

  const handleEdit = () => {
    console.log('Editar cuenta');
  };

  const handleDelete = () => {
    console.log('Eliminar cuenta');
  };
  
return (
  <div>
    <TitleWithLink title="Account Details" linkText="Back to accounts" linkUrl="/accounts" />
    <div className="flex justify-center">
      <UserDatabase />
    </div>
    {/*
    
    const onDestroy = (e) => {
      if (!confirm('Are you sure you want to delete this account?')) {
        e.preventDefault()
      }
    }

    <div>
        <p>
          ID: {account.id} { account.is_default ? <strong>(Default Account)</strong> : null }
        </p>
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
    </div> */}
  </div>
)
}

export default Show;