import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="p-8 bg-gray-900 text-white text-center">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="h-10" />
        <span className="text-white text-xl font-bold">Eco Gym</span>
      </div>
      <p className="mt-4 text-sm max-w-md">
        Join us at Eco Gym, where our elite trainers and curated guided meditations help you rejuvenate, excel, and thrive. Make some time just for you.
      </p>
      <ul className="flex justify-center mt-4 space-x-6">
        <li>
          <a href="#" className="text-xl hover:text-turquoise"><FaTwitter /></a>
        </li>
        <li>
          <a href="#" className="text-xl hover:text-turquoise"><FaFacebook /></a>
        </li>
        <li>
          <a href="#" className="text-xl hover:text-turquoise"><FaInstagram /></a>
        </li>
        <li>
          <a href="#" className="text-xl hover:text-turquoise"><FaEnvelope /></a>
        </li>
      </ul>
      <div className="mt-6">
        <ul className="flex justify-center space-x-6 text-sm">
          <li><Link href="/" className="hover:text-turquoise">Home</Link></li>
          <li><Link href="/workouts" className="hover:text-turquoise">Workouts</Link></li>
          <li><Link href="/meditations" className="hover:text-turquoise">Meditations</Link></li>
          <li><Link href="/about" className="hover:text-turquoise">About</Link></li>
        </ul>
      </div>
      <p className="mt-6 text-xs text-gray-400">© 2024 Eco Gym. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
