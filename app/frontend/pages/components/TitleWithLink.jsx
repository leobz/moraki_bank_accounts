import { Link } from '@inertiajs/react'

const TitleWithLink = ({ title, linkText, linkUrl }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <Link href={linkUrl} className="text-blue-500 hover:underline">
        {linkText}
      </Link>
    </div>
  );
};

export default TitleWithLink;