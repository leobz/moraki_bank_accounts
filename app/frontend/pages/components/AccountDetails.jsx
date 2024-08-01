import { Link } from "@inertiajs/react";
import AccountDefaultInsignia from "./AccountDefaultInsignia";

const EditDestroyLinks = ({ resourceName, resourcePath }) => {
  const onDestroy = (e) => {
    if (!confirm(`Are you sure you want to delete this ${resourceName}?`)) {
      e.preventDefault();
    }
  };

  const styleClasses = "text-blue-500 hover:underline";

  return (
    <div className="flex justify-end p-4 space-x-2">
      <Link href={`${resourcePath}/edit`} className={styleClasses}>Edit</Link>
      <Link
        href={resourcePath}
        onClick={onDestroy}
        as="button"
        method="delete"
        className={styleClasses}
      >Delete</Link>
    </div>
  );
};

const DetailRow = ({ label, value, bgColor }) => (
  <div className={`${bgColor} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
);

const AccountDetails = ({ account }) => {
  const accountPath = `/accounts/${account.id}`;

  return (
    <div className="relative bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
      {account.is_default && <AccountDefaultInsignia />}
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {`${account.balance} ${account.currency}`}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and information about the account.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailRow label="Account Name" value={account.name} bgColor="bg-gray-50" />
          <DetailRow label="Account Number" value={account.account_number} bgColor="bg-white" />
          <DetailRow label="Currency" value={account.currency} bgColor="bg-gray-50" />
          <DetailRow label="Status" value={account.status} bgColor="bg-white" />
          <DetailRow label="Balance" value={`${account.balance} ${account.currency}`} bgColor="bg-gray-50" />
        </dl>
      </div>
      <EditDestroyLinks resourceName="account" resourcePath={accountPath} />
    </div>
  );
};


export default AccountDetails;