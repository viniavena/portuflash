import Link from 'next/link';

const Header = () => {
  return (
    <header className=" text-white p-4">
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/categories" className="hover:text-gray-300">
              Categories
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
