import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import { SearchBar } from "src/features/search-bar";
import { NavBar } from "src/features/nav-bar";
import { CarWaterfall } from "src/features/car-waterfall";
// import Login from "../../components/login/index";

const Container = styled(View)``;
const Index = () => {
  return (
    <Container>
      <SearchBar />
      {/* <Login /> */}
      <CarWaterfall />
      <NavBar />
    </Container>
  );
};

export default Index;
