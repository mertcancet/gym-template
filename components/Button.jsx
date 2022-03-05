import { styled } from 'stitches.config';

const Button = ({ prefix, suffix, children, ...props }) => {
  return (
    <StyledButton {...props}>
      {prefix}
      {children}
      {suffix}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled('button', {
  color: '$white',
  backgroundColor: '$red',
  p: 20,
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});
