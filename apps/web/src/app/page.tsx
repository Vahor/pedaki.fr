import Faq from './faq';
import Features from './features';
import Hero from './hero';
import Newsletter from './newsletter';
import Price from './price';
import Roadmap from './roadmap';
import SocialProof from './social-proof';

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <Price />
      <Roadmap />
      <Faq />
      <Newsletter />
    </>
  );
}
