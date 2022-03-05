import React from 'react';

import { Title } from 'components';
import { Logo as MuscleLogo } from 'components/icons';
import { styled } from 'stitches.config';

const Logo = ({ ...props }) => {
  return (
    <Container {...props}>
      <MuscleLogo width={40} height={40} />
      <Title level={5}> GYM UNLIMITED</Title>
    </Container>
  );
};

export default Logo;

const Container = styled('div', {
  display: 'flex',
  gap: 15,
  maxWidth: 134,
});
