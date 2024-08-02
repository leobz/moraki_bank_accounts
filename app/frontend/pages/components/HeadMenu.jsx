import { Link } from '@inertiajs/react'

/**
 * Renders a header menu component which has a title at the left and an action link at the right
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display in the header.
 * @param {string} props.linkText - The text to display for the link.
 * @param {string} props.linkUrl - The URL to navigate to when the link is clicked.
 * @returns {JSX.Element} The rendered header menu component.
 */
const HeadMenu = ({ title, linkText, linkUrl }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <Link href={linkUrl} className="text-blue-500 hover:underline">
        {linkText}
      </Link>
    </div>
  );
};

export default HeadMenu;