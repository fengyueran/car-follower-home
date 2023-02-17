import { styled } from "linaria/react";

import { Col } from "src/components";

const Container = styled(Col)`
  height: 100vh;
  box-sizing: border-box;
`;

const Agreement = () => {
  return <Container>用户协议</Container>;
};

export default Agreement;
