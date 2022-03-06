import React from 'react';
import { Container, Logo } from 'components';
import { Facebook, Twitter, Instagram } from 'components/icons';
import { styled } from 'stitches.config';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
          <Logo />
          <IconWrapper>
            <Facebook width={30} height={30} />
            <Twitter width={30} height={30} />
            <Instagram width={30} height={30} />
          </IconWrapper>
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled('div', {
  backgroundColor: '$black',
  py: 60,
});

const FooterWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const IconWrapper = styled('div', {
  display: 'flex',
  gap: 10,
});
