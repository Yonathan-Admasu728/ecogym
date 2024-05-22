const Banner = () => (
  <section className="relative h-screen w-full">
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50 p-4">
      <h1 className="text-5xl font-bold">Welcome to Eco Gym</h1>
      <h2 className="mt-4 text-3xl font-semibold text-turquoise">Elite Workouts & Guided Meditations</h2>
      <p className="mt-4 text-xl">
        Discover a space just for you. Refresh, excel, and thrive with our curated sessions led by top-tier trainers.
      </p>
      <a href="#" className="mt-8 bg-white text-black px-6 py-3 rounded">Get started</a>
    </div>
  </section>
);

export default Banner;
