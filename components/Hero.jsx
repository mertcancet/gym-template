import React from 'react';
import Image from 'next/image';

import { HeroText, Logo } from 'components';
import { styled } from 'stitches.config';

const Hero = () => {
  return (
    <Container>
      <Background>
        <Image
          src="/images/Hero-Image.png"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Background>
      <Wrapper>
        <Logo className="logo" />
        <HeroText />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled('div', {
  h: 700,
  position: 'relative',
});

const Background = styled('div', {
  position: 'absolute',
  w: '100%',
  h: '100%',
  zIndex: -1,
});

const Wrapper = styled('div', {
  maxWidth: 1440,
  mx: 'auto',
  '& .logo': {
    pt: 35,
    mb: 98,
  },
});
