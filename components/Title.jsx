import { styled } from 'stitches.config';

const Title = ({ level = 1, children, ...props }) => {
  return (
    <StyledTitle level={level} {...props}>
      {children}
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled('div', {
  fw: 700,
  textTransform: 'uppercase',
  color: '$white',
  variants: {
    level: {
      1: {
        fs: 64,
        lh: 75,
      },
      2: {
        fs: 36,
        lh: 40,
      },
      3: {
        fs: 24,
        lh: 30,
      },
      4: {
        fs: 18,
        lh: 20,
      },
      5: {
        fs: 16,
        lh: 20,
      },
    },
  },
});
