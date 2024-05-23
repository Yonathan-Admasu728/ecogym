// components/Modal.js
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Modal = ({ item, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 transform transition-transform duration-300 ${visible ? 'scale-100' : 'scale-90'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <button onClick={handleClose} className="text-gray-600">&times;</button>
        </div>
        <div className="p-4">
          <Image src={item.src} alt={item.title} width={500} height={300} className="w-full h-48 object-cover rounded-t" />
          <p className="mt-4">{item.desc}</p>
          <p className="mt-4 text-gray-700">
            This program is designed to help you achieve your fitness goals over a set period. The duration varies, with options like a 21-day challenge or a single intensive session. Depending on the program, you might need some equipment such as yoga mats, dumbbells, or resistance bands. Each session is carefully curated to ensure maximum effectiveness and enjoyment.
          </p>
          <h3 className="mt-6 text-xl font-bold text-turquoise">Trainer</h3>
          <div className="flex items-center mt-2 space-x-4">
            <Image src={item.trainer.profilePic} alt={item.trainer.name} width={64} height={64} className="w-16 h-16 rounded-full object-cover shadow-md" />
            <div>
              <p className="text-sm font-bold text-turquoise">{item.trainer.name}</p>
              <p className="text-sm text-gray-500">{item.trainer.bio}</p>
            </div>
          </div>
          <a href={item.url} className="mt-4 inline-block px-4 py-2 bg-turquoise text-white rounded">Watch</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
