import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import SearchBar from "src/features/search-bar";
import { NavBar } from "src/features/nav-bar";
import CaseList from "src/features/case-list";
import { CarWaterfall } from "src/features/car-waterfall";
// import Login from "../../components/login/index";

const Container = styled(View)`
  height: 100vh;
  background: #f5f5f5;
  box-sizing: border-box;
  padding-top: 24px;
`;

const SeparateBar = styled(View)`
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 26px 32px;
`;

const Index = () => {
  return (
    <Container>
      <SearchBar />
      <SeparateBar />
      <CaseList />
      {/* <Login /> */}
      {/* <CarWaterfall /> */}
      <NavBar />
    </Container>
  );
};

export default Index;
