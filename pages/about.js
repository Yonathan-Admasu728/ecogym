// pages/about.js
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Eco Gym</title>
      </Head>
      <section className="bg-gray-100 text-gray-800 py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl font-bold text-center text-turquoise">About Eco Gym</h1>
          <p className="mt-6 text-lg text-center">
            At Eco Gym, we're dedicated to transforming your fitness and wellness journey with expert-led workout programs and curated guided meditations. Our mission is to create a space where you can focus on yourself, rejuvenate, and achieve your health goals.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src="/images/workout.jpg" alt="Workout" className="w-full h-64 object-cover rounded-lg shadow-md" />
              <h2 className="mt-4 text-2xl font-bold">Expert-Led Workouts</h2>
              <p className="mt-2 text-center">
                Our workout programs are designed by elite trainers with years of experience. From 21-day challenges to single intense sessions, we offer a variety of programs to suit all fitness levels. Whether you need a yoga mat or dumbbells, we've got you covered.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/meditation.jpg" alt="Meditation" className="w-full h-64 object-cover rounded-lg shadow-md" />
              <h2 className="mt-4 text-2xl font-bold">Curated Meditations</h2>
              <p className="mt-2 text-center">
                Discover a collection of guided meditations to help you manage stress, improve focus, and find inner peace. Our mindfulness experts have created sessions that fit into your busy schedule, making it easy to prioritize your mental well-being.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4">
              Eco Gym was founded with the belief that fitness and wellness should be accessible to everyone. We started as a small community of fitness enthusiasts and have grown into a platform that offers high-quality, diverse programs to help you stay fit and healthy.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src="/images/community.jpg" alt="Community" className="w-full h-64 object-cover rounded-lg shadow-md" />
              <h2 className="mt-4 text-2xl font-bold">Join Our Community</h2>
              <p className="mt-2 text-center">
                Becoming a part of Eco Gym means joining a supportive and motivating community. Connect with like-minded individuals, share your progress, and stay inspired on your journey.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/eco-friendly.jpg" alt="Eco-Friendly" className="w-full h-64 object-cover rounded-lg shadow-md" />
              <h2 className="mt-4 text-2xl font-bold">Eco-Friendly Commitment</h2>
              <p className="mt-2 text-center">
                We're committed to sustainability. Our platform and programs are designed with eco-friendly practices in mind, ensuring that you can focus on your health while also caring for the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
