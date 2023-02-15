import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import NavBar from "src/features/nav-bar";
import Findings from "src/features/findings";
// import { CarWaterfall } from "src/features/car-waterfall";
// import Login from "../../components/login/index";

const Container = styled(View)`
  height: 100vh;
  background: #f5f5f5;
  box-sizing: border-box;
`;

const Index = () => {
  return (
    <Container>
      <Findings />
      {/* <Login /> */}
      {/* <CarWaterfall /> */}
      {/* <NavBar /> */}
    </Container>
  );
};

export default Index;
