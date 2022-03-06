import { styled } from 'stitches.config';

const Container = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled('div', {
  maxWidth: 1440,
  mx: 'auto',
  '@2xlMax': {
    px: 16,
  },
});
