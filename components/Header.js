import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-white p-4">
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <p className="hover:text-gray-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <p className="hover:text-gray-300">Categories</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-gray-300">About</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
