import {
  AccessSection,
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
    </div>
  );
};

export default Home;
