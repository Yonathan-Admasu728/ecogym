import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="flex items-center justify-between p-4 bg-transparent">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="h-10" />
          <span className="text-white text-xl font-bold">Eco Gym</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/workouts" className="text-white">Workouts</Link>
          <Link href="/meditations" className="text-white">Meditations</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="#" className="bg-white text-black px-4 py-2 rounded">Try it for free</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-75 p-4">
          <Link href="/" className="block text-white py-2">Home</Link>
          <Link href="/workouts" className="block text-white py-2">Workouts</Link>
          <Link href="/meditations" className="block text-white py-2">Meditations</Link>
          <Link href="/about" className="block text-white py-2">About</Link>
          <Link href="#" className="block bg-white text-black px-4 py-2 rounded mt-2">Try it for free</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
