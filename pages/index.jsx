import { Button, Text, Title } from 'components';

const Home = () => {
  return (
    <div>
      <Title level={1} as="h1">
        Headline
      </Title>
      <Title level={2} as="h2">
        Headline 2
      </Title>
      <Title level={3} as="h3">
        Headline 3
      </Title>
      <Title level={4} as="h4">
        Headline 4
      </Title>
      <Title level={5} as="h5">
        Headline 5
      </Title>
      <Text level={1}>Lead Paragraf</Text>
      <Text as="span"> Paragraf</Text>
      <Button>Select a memebership plan</Button>
    </div>
  );
};

export default Home;
