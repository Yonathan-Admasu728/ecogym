import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="p-8 bg-gray-900 text-white text-center">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
    <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
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
          <li><a href="#" className="hover:text-turquoise">Home</a></li>
          <li><a href="#" className="hover:text-turquoise">Workouts</a></li>
          <li><a href="#" className="hover:text-turquoise">Meditations</a></li>
          <li><a href="#" className="hover:text-turquoise">About</a></li>
        </ul>
      </div>
      <p className="mt-6 text-xs text-gray-400">© 2024 Eco Gym. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
