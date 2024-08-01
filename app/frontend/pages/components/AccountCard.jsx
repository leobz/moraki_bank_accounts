import { Link } from '@inertiajs/react'
import AccountDefaultInsignia from './AccountDefaultInsignia'

const AccountCard = ({ account }) => {
  // TODO: Get the country code from the currency
  const currency_country_iso_code = "gb";

  return (
    <div className="relative">
      {account.is_default && <AccountDefaultInsignia />}
      <Link href={`/accounts/${account.id}`} className="block max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-4">
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{account.name}</h2>
            <p className="text-gray-600">{account.currency}</p>
          </div>
          <img className="w-16 h-16 rounded-full" src={`https://flagcdn.com/w160/${currency_country_iso_code}.jpg`} alt="Avatar" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{account.balance}</h3>
        </div>
      </Link>
    </div>
  );
};

export default AccountCard;