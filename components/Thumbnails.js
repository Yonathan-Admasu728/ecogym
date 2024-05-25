// components/Thumbnails.js
import ThumbnailItem from './ThumbnailItem';

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

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <ThumbnailItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Thumbnails;

