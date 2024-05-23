import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
