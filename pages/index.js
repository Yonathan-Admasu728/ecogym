import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Thumbnails from '../components/Thumbnails'; // Assuming this component is similar to the previous one

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eco Gym</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Eco Gym: Elevate your fitness journey with top-rated coaches and curated guided meditations." />
        <meta property="og:title" content="Eco Gym" />
        <meta property="og:description" content="Elevate your fitness journey with top-rated coaches and curated guided meditations. Discover a space for self-care and transformation." />
        <meta property="og:image" content="https://yourdomain.com/path/to/your/image.jpg" />  {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://ecogym.space" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eco Gym" />
        <meta name="twitter:description" content="Elevate your fitness journey with top-rated coaches and curated guided meditations. Discover a space for self-care and transformation." />
        <meta name="twitter:image" content="https://yourdomain.com/path/to/your/image.jpg" />  {/* Replace with your actual image URL */}
      </Head>
      <Header />
      <Banner />
      <main id="main" className="py-16">
        <Thumbnails />
      </main>
      <Footer />
    </div>
  );
}
