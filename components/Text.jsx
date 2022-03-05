import { styled } from 'stitches.config';

const Text = ({ level = 2, children, as, props }) => {
  return (
    <StyledText level={level} as={as} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled('p', {
  fw: 400,
  variants: {
    level: {
      1: {
        fs: 24,
        lh: 30,
      },
      2: {
        fs: 18,
        lh: 25,
      },
    },
  },
});
