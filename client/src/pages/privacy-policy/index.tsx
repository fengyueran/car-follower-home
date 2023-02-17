import { styled } from "linaria/react";

import { Col } from "src/components";

const Container = styled(Col)`
  height: 100vh;
  box-sizing: border-box;
`;

const PrivacyPolicy = () => {
  return <Container>隐私政策</Container>;
};

export default PrivacyPolicy;
