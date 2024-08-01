import AccountCard from './AccountCard'

const IndexCards = () => {

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3,4,5].map((card, index) => (
          <AccountCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default IndexCards;