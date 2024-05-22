// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Thumbnails from '../components/Thumbnails'; // Assuming this component is similar to the previous one

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Motion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
