import Image from 'next/image';

import { Container, Title } from 'components';
import { styled } from 'stitches.config';

const OwnerSection = () => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Owner>
            <Title level={5} className="owner">
              meet the owner
            </Title>
            <Title level={2} className="name">
              andrew mate
            </Title>
            <Title level={5}>for over 10 years</Title>
          </Owner>
          <ImageWrapper>
            <Image
              layout="fill"
              objectFit="cover"
              src="images/owner-image.png"
              unoptimized
            />
          </ImageWrapper>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default OwnerSection;

const Wrapper = styled('div', {
  backgroundColor: '$black100',
  py: 60,
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  justifyItems: 'center',
});

const Owner = styled('div', {
  maxWidth: 465,
  justifyItems: 'center',
  alignSelf: 'center',
  '.owner': {
    mb: 5,
  },
  '.name': {
    mb: 20,
  },
});

const ImageWrapper = styled('div', {
  position: 'relative',
  paddingTop: '75%',
  widthPercent: 100,
  boxShadow: '10px 10px 0px 0px #E11B19',
});
