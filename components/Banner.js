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
          publicId="background_mmkqgs"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/fallback2.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
          innerRef={videoRef}
        />
      </CloudinaryContext>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold">Welcome to Ecogym</h1>
        <p className="mt-4 text-xl">
          <span className="text-turquoise">Elevate your fitness journey with top rated coaches</span> and highly curated guided meditations.
        </p>
        <p className="mt-4 text-xl">
          Discover a space for self-care and transformation.
        </p>
        <Link href="/workouts" passHref legacyBehavior>
            <a className="block bg-white text-black px-4 py-2 rounded mt-2 hover:bg-turquoise hover:text-white transition-colors duration-300">Get Started</a>
          </Link>
      </div>
    </section>
  );
};

export default Banner;
