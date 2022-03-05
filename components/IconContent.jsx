import { Title } from 'components';
import { styled } from 'stitches.config';

const IconContent = ({ icon, title, subTitle, ...props }) => {
  return (
    <Container {...props}>
      {icon}
      <div>
        <Title level={2}> {title}</Title>
        <Title level={3}> {subTitle}</Title>
      </div>
    </Container>
  );
};

export default IconContent;

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 43,
});
