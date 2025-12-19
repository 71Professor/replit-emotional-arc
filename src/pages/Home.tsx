import Hero from '../components/Home/Hero';
import Intro from '../components/Home/Intro';
import PacksSection from '../components/Home/PacksSection';
import Bundle from '../components/Home/Bundle';
import Statement from '../components/Home/Statement';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <PacksSection />
      <Bundle />
      <Statement />
    </>
  );
}
