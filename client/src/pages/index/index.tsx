import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import { SearchBar } from "src/features/search-bar";
// import Login from "../../components/login/index";

const Container = styled(View)``;
const Index = () => {
  return (
    <Container>
      <SearchBar />
      {/* <Login /> */}
    </Container>
  );
};

export default Index;
