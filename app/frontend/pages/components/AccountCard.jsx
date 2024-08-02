import { Link } from '@inertiajs/react';
import AccountDefaultInsignia from './AccountDefaultInsignia';

/**
 * Renders an account card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.account - The account object containing account details.
 * @param {string} props.account.id - The account ID.
 * @param {string} props.account.name - The account name.
 * @param {number} props.account.balance - The account balance.
 * @param {Object} props.account.currency - The currency object containing currency details.
 * @param {string} props.account.currency.code - The currency code.
 * @param {string} props.account.currency.country_code - The country code associated with the currency.
 * @param {boolean} props.account.is_default - Indicates whether the account is the default account.
 * @returns {JSX.Element} The rendered AccountCard component.
 */
const AccountCard = ({ account }) => {
  const { id, name, balance, currency, is_default } = account;
  const currencyCountryCode = currency.country_code.toLowerCase();

  return (
    <div className="relative">
      {is_default && <AccountDefaultInsignia />}
      <Link href={`/accounts/${id}`} className="block max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-4">
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{currency.code}</p>
          </div>
          <img className="w-16 h-16 rounded-full object-cover" src={`https://flagcdn.com/w160/${currencyCountryCode}.jpg`} alt="Avatar" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{`${currency.symbol} ${balance}`}</h3>
        </div>
      </Link>
    </div>
  );
};

export default AccountCard;