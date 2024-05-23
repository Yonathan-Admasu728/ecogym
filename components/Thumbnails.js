import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';

const Thumbnails = () => {
  const items = [
    {
      src: '/images/med4.png',
      title: '21-Day Yoga Challenge',
      desc: 'Join Laura Jung on a 21-day yoga journey to enhance your flexibility and mindfulness.',
      trainer: {
        name: 'Laura Jung',
        profilePic: '/images/trainer-laura.png',
        bio: 'Certified yoga instructor with over 10 years of experience.',
      },
      url: 'https://youtu.be/s6zR2T9vn2c',
    },
    {
      src: '/images/hiit.png',
      title: 'HIIT Workout',
      desc: 'Boost your metabolism and burn calories with John Smith\'s intense HIIT sessions.',
      trainer: {
        name: 'Zack Chico',
        profilePic: '/images/trainer-zack.png',
        bio: 'Experienced personal trainer specializing in high-intensity interval training.',
      },
      url: 'https://youtu.be/s6zR2T9vn2c',
    },
    {
      src: '/images/med2.png',
      title: 'Meditation for Beginners',
      desc: 'Relax and find inner peace with Emily Johnson\'s guided meditation sessions.',
      trainer: {
        name: 'Emily Johnson',
        profilePic: '/images/trainer-emily.png',
        bio: 'Mindfulness coach with a passion for helping others find tranquility.',
      },
      url: 'https://youtu.be/s6zR2T9vn2c',
    },
    {
      src: '/images/pilates.png',
      title: 'Advanced Pilates',
      desc: 'Challenge yourself with advanced Pilates techniques guided by Robert Brown.',
      trainer: {
        name: 'Robert Brown',
        profilePic: '/images/trainer-robert.png',
        bio: 'Certified Pilates instructor with a focus on core strength and flexibility.',
      },
      url: 'https://youtu.be/s6zR2T9vn2c',
    },
    {
      src: '/images/med1.png',
      title: 'Mindfulness Meditation',
      desc: 'Deepen your mindfulness practice with Sarah Williams\' guided sessions.',
      trainer: {
        name: 'Sarah Williams',
        profilePic: '/images/trainer-sarah.png',
        bio: 'Experienced meditation instructor dedicated to promoting mental well-being.',
      },
      url: 'https://youtu.be/s6zR2T9vn2c',
    },
    {
      src: '/images/strength.png',
      title: 'Strength Training',
      desc: 'Build muscle and increase strength with Michael Davis\' structured program.',
      trainer: {
        name: 'Michael Davis',
        profilePic: '/images/trainer-michael.png',
        bio: 'Fitness coach with a focus on strength and conditioning.',
      },
      url: 'https://youtu.be/s6zR2T9vn2c',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded shadow-lg overflow-hidden">
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
      ))}
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Thumbnails;
