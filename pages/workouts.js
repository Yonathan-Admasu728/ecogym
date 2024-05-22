import Thumbnails from '../components/Thumbnails';

const Workouts = () => {
  const workouts = [
    { 
      src: "/images/workout1.jpg", 
      title: "21 Day Challenge", 
      desc: "An intensive 21-day workout program...", 
      url: "https://youtu.be/s6zR2T9vn2c",
      trainer: {
        name: "Jane Doe",
        profilePic: "/images/trainer1.jpg",
        bio: "Jane is a certified fitness trainer with over 10 years of experience..."
      }
    },
    { 
      src: "/images/workout2.jpg", 
      title: "Full Body Workout", 
      desc: "A comprehensive full body workout...", 
      url: "https://youtu.be/s6zR2T9vn2c",
      trainer: {
        name: "John Smith",
        profilePic: "/images/trainer2.jpg",
        bio: "John specializes in full body workouts and has helped many clients achieve their fitness goals..."
      }
    },
    // Add more workout programs with trainer info
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-turquoise mb-8">Workout Programs</h1>
      <Thumbnails items={workouts} />
    </div>
  );
};

export default Workouts;
