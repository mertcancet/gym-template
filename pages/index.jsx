import {
  AccessSection,
  Footer,
  Hero,
  IconSection,
  OwnerSection,
  WorldClassSection,
} from 'components';

const Home = () => {
  return (
    <div>
      <Hero />
      <IconSection />
      <WorldClassSection />
      <OwnerSection />
      <AccessSection />
      <Footer />
    </div>
  );
};

export default Home;
