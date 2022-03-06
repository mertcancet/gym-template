import { Button, Container, Text, Title } from 'components';
import { RightChevron } from 'components/icons';
import { styled } from 'stitches.config';

const AccessSection = () => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <div className="container">
            <Title level={5} className="access">
              24 hour gym access
            </Title>
            <Title level={1} className="weeks">
              8 weeks of gym access for $56
            </Title>
            <Text className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat vulputate interdum ultricies tortor, nisi tortor egestas
              mauris.
            </Text>
            <Button suffix={<RightChevron width={20} height={20} />}>
              Select a memebership plan
            </Button>
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default AccessSection;

const Wrapper = styled('div', {
  backgroundColor: '$black',
  py: 60,
});

const Grid = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  '.container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 543,
    textAlign: 'center',
    '.access': {
      mb: 5,
    },
    '.weeks': {
      mb: 20,
    },
    '& .lorem': {
      mb: '25px !important',
    },
  },
});
