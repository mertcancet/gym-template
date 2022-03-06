import React from 'react';
import Image from 'next/image';

import { Container, Title } from 'components';
import { Check } from 'components/icons';
import { styled } from 'stitches.config';

const iconContent = [
  { content: '24 HR HEATED POOL' },
  { content: 'FULLT AIR-CONTIONED' },
  { content: 'OVER 100 CLASSES PER WEEK' },
];

const WorldClassSection = () => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <ImageWrapper>
            <Image
              layout="fill"
              objectFit="cover"
              src="images/Pool-image.png"
              unoptimized
            />
          </ImageWrapper>
          <Content>
            <Title level={5} className="gym">
              Gymline
            </Title>
            <Title level={2} className="world">
              World CLASS TRAINING EXPERIENCE
            </Title>
            {iconContent.map((content, i) => (
              <div className="icon-wrapper" key={i}>
                <Check />
                <Title level={5}>{content.content}</Title>
              </div>
            ))}
          </Content>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default WorldClassSection;

const Wrapper = styled('section', {
  backgroundColor: '$black',
  py: 60,
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  justifyItems: 'center',
});

const ImageWrapper = styled('div', {
  position: 'relative',
  paddingTop: '75%',
  widthPercent: 100,
  boxShadow: '-10px 10px 0px 0px #E11B19',
});

const Content = styled('div', {
  maxWidth: 465,
  justifyItems: 'center',
  alignSelf: 'center',
  '.gym': {
    mb: 5,
  },
  '.world': {
    mb: 20,
  },
  '.icon-wrapper': {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    mb: 20,
  },
});
