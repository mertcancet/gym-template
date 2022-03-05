import React from 'react';

import { Container, IconContent, Title } from 'components';
import { Callender, CircleCheck, Clock } from 'components/icons';
import { styled } from 'stitches.config';

const contents = [
  {
    icon: <Callender width={40} height={40} />,
    title: '14 Day',
    subTitle: 'Guarantee',
  },
  {
    icon: <Clock width={40} height={40} />,
    title: '24/7',
    subTitle: 'Gym access',
  },
  {
    icon: <CircleCheck width={40} height={40} />,
    title: 'Anytime',
    subTitle: 'cancelation',
  },
];

const IconSection = () => {
  return (
    <Bg>
      <Container>
        <Grid>
          <IconTitle>
            <Title level={2} as="h2">
              Member Benefits
            </Title>
          </IconTitle>
          {contents.map((content, i) => (
            <IconContent
              key={i}
              icon={content.icon}
              title={content.title}
              subTitle={content.subTitle}
            />
          ))}
        </Grid>
      </Container>
    </Bg>
  );
};

export default IconSection;

const Bg = styled('div', {
  h: 200,
  backgroundColor: '$black100',
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  '@xlMax': {
    gridTemplateColumns: 'repeat(2,1fr)',
    gridRowGap: '32px',
    justifyItems: 'center',
  },
});

const IconTitle = styled('div', {
  maxWidth: 255,
});
