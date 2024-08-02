import { Link } from "@inertiajs/react";
import AccountDefaultInsignia from "./AccountDefaultInsignia";

/**
 * Component that shows edit and delete links aligned on the right side
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.resourceName - The name of the resource.
 * @param {string} props.resourcePath - The path to the resource.
 * @returns {JSX.Element} The rendered component.
 */
const EditDestroyLinks = ({ resourceName, resourcePath }) => {
  const handleDestroy = (e) => {
    if (!confirm(`Are you sure you want to delete this ${resourceName}?`)) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex justify-end p-4 space-x-2">
      <Link href={`${resourcePath}/edit`} className="text-blue-500 hover:underline">
        Edit
      </Link>
      <Link href={resourcePath} onClick={handleDestroy} as="button" method="delete" className="text-blue-500 hover:underline">
        Delete
      </Link>
    </div>
  );
};

/**
 * Renders a row with a label and value.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the row.
 * @param {string} props.value - The value for the row.
 * @param {string} props.bgColor - The background color for the row.
 * @returns {JSX.Element} The rendered DetailRow component.
 */
const DetailRow = ({ label, value, bgColor }) => (
  <div className={`${bgColor} px-4 py-5 grid grid-cols-3 gap-4`}>
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="text-sm text-gray-900 col-span-2">{value}</dd>
  </div>
);

/**
 * Renders the account details component.
 *
 * @component
 * @param {Object} account - The account object.
 * @param {string} account.id - The ID of the account.
 * @param {string} account.name - The name of the account.
 * @param {string} account.account_number - The account number.
 * @param {Object} account.currency - The currency object.
 * @param {string} account.currency.symbol - The currency symbol.
 * @param {string} account.currency.code - The currency code.
 * @param {string} account.status - The status of the account.
 * @param {number} account.balance - The balance of the account.
 * @returns {JSX.Element} The rendered AccountDetails component.
 */
const AccountDetails = ({ account }) => {
  const accountPath = `/accounts/${account.id}`;

  return (
    <div className="relative bg-white max-w-2xl shadow sm:rounded-lg">
      {account.is_default && <AccountDefaultInsignia />}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">
          {`${account.currency.symbol} ${account.balance}`}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Details and information about the account.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailRow label="Account Name" value={account.name} bgColor="bg-gray-50" />
          <DetailRow label="Account Number" value={account.account_number} bgColor="bg-white" />
          <DetailRow label="Currency" value={account.currency.code} bgColor="bg-gray-50" />
          <DetailRow label="Status" value={account.status} bgColor="bg-white" />
          <DetailRow label="Balance" value={`${account.currency.symbol} ${account.balance}`} bgColor="bg-gray-50" />
        </dl>
      </div>
      <EditDestroyLinks resourceName="account" resourcePath={accountPath} />
    </div>
  );
};

export default AccountDetails;