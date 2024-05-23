import Image from 'next/image';

// components/Banner.js
const Banner = () => (
  <section className="relative h-screen w-full">
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/images/fallback.png"
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50">
      <h1 className="text-5xl font-bold">Welcome to Eco Gym</h1>
      <p className="mt-4 text-xl">
        Elevate your fitness journey with expert trainers and curated guided meditations. Discover a space for self-care and transformation.
      </p>
      <a href="#" className="mt-8 bg-white text-black px-6 py-3 rounded">Try it for free</a>
    </div>
  </section>
);

export default Banner;
