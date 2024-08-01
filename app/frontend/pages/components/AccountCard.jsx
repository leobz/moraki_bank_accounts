import { Link } from '@inertiajs/react'

const AccountCard = () => {
  return (
    <div>
        <Link href="/accounts/1" className="block max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center p-4">
            <div className="flex-grow">
              <h2 className="text-xl font-bold">Título</h2>
              <p className="text-gray-600">Subtítulo</p>
            </div>
            <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/150" alt="Avatar" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Título Inferior</h3>
          </div>
        </Link>
    </div>
  );
};

export default AccountCard;