import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import Login from "../../components/login/index";

const Container = styled(View)`
  background: red;
`;
const Index = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default Index;
