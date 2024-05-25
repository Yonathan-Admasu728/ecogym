// components/ThumbnailItem.js
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal'; 

const ThumbnailItem = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="bg-white rounded shadow-lg overflow-hidden">
        <button onClick={() => setSelectedItem(item)} className="block w-full">
          <Image src={item.src} alt={item.title} width={500} height={300} className="w-full h-48 object-cover rounded-t" />
        </button>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.desc}</p>
          <button onClick={() => setSelectedItem(item)} className="mt-4 inline-block px-4 py-2 bg-turquoise text-white rounded">
            Learn More
          </button>
        </div>
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  );
};

export default ThumbnailItem;
