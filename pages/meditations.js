import Thumbnails from '../components/Thumbnails';

const Meditations = () => {
  const meditations = [
    { src: "/images/meditation1.jpg", title: "Morning Meditation", desc: "Start your day with a peaceful mind...", url: "https://youtu.be/s6zR2T9vn2c" },
    { src: "/images/meditation2.jpg", title: "Stress Relief Meditation", desc: "Ease your stress with this guided session...", url: "https://youtu.be/s6zR2T9vn2c" },
    // Add more meditation programs
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-turquoise mb-8">Meditation Sessions</h1>
      <Thumbnails items={meditations} />
    </div>
  );
};

export default Meditations;
