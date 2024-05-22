import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="flex items-center justify-between p-4 bg-transparent">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
          <span className="text-white text-xl font-bold">Eco Gym</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" legacyBehavior>
            <a className="text-white">Home</a>
          </Link>
          <Link href="/workouts" legacyBehavior>
            <a className="text-white">Workouts</a>
          </Link>
          <Link href="/meditations" legacyBehavior>
            <a className="text-white">Meditations</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white">About</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="bg-white text-black px-4 py-2 rounded">Try it for free</a>
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-75 p-4">
          <Link href="/" legacyBehavior>
            <a className="block text-white py-2">Home</a>
          </Link>
          <Link href="/workouts" legacyBehavior>
            <a className="block text-white py-2">Workouts</a>
          </Link>
          <Link href="/meditations" legacyBehavior>
            <a className="block text-white py-2">Meditations</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block text-white py-2">About</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="block bg-white text-black px-4 py-2 rounded mt-2">Try it for free</a>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
