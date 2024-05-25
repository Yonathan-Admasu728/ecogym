import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Video, CloudinaryContext } from 'cloudinary-react';

// components/Banner.js
const Banner = () => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    <section className="relative h-screen w-full" ref={ref}>
      <CloudinaryContext cloudName="dctjqcupv">
        <Video
          publicId="banner2_nhffpp"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/fallback2.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
          innerRef={videoRef}
          secure // This ensures HTTPS is used
        />
      </CloudinaryContext>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50 p-4 md:p-8 lg:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to Ecogym</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Elevate your fitness journey with top-rated coaches and highly curated guided meditations.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Discover a space for <span className="text-turquoise">self-care and transformation.</span>
        </p>
        <Link href="/workouts" passHref legacyBehavior>
          <a className="mt-8 bg-white text-black px-6 py-3 rounded hover:bg-turquoise hover:text-white transition-colors duration-300">Get Started</a>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
