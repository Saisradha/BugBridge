import Head from 'next/head';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>BugBountyHQ - Crowdsourced Web Improvement</title>
        <meta name="description" content="Report bugs, earn rewards, and help improve websites worldwide" />
      </Head>
      
      <main>
        <Hero />
        <FeatureCards />
      </main>
    </>
  );
}