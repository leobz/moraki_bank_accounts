import AccountCard from './AccountCard'

/**
 * Renders a grid of account cards.
 *
 * @component
 * @param {Object[]} accounts - The array of account objects.
 * @returns {JSX.Element} The rendered component.
 */
const IndexCards = ({accounts}) => {

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default IndexCards;