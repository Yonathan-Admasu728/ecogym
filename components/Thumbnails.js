import { useState } from 'react';
import Modal from './Modal';

const Thumbnails = ({ items = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <button onClick={() => setSelectedItem(item)} className="block w-full">
              <img src={item.src} alt={item.title} className="w-full h-48 object-cover" />
            </button>
            <div className="p-4">
              <h3 className="text-xl font-bold text-turquoise">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              <button onClick={() => setSelectedItem(item)} className="mt-4 inline-block px-4 py-2 bg-turquoise text-white rounded">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Thumbnails;
