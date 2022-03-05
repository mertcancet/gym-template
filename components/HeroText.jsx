import { Button, Text, Title } from 'components';
import { styled } from 'stitches.config';
import { RightChevron } from 'components/icons';

const HeroText = () => {
  return (
    <Container>
      <Title level={5} as="h5" className="hour">
        24 hour gym access
      </Title>
      <Title level={1} as="h1" className="week">
        8 weeks of gym access for $56
      </Title>
      <Text className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
        vulputate interdum ultricies tortor, nisi tortor egestas mauris.
      </Text>
      <Button
        suffix={<RightChevron width={25} height={25} />}
        className="membership"
      >
        Select a memebership plan
      </Button>
    </Container>
  );
};

export default HeroText;

const Container = styled('div', {
  maxWidth: 543,
  '.hour': {
    mb: 5,
  },
  '.week': {
    mb: 15,
  },
  '& .lorem': {
    mb: '25px!important',
  },
});
