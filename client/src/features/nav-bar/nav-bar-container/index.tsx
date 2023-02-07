import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import { NavBar } from "../components";

const Container = styled(View)`
  position: fixed;
  bottom: 50px;
  width: 100%;
`;

export const NavBarContainer = () => {
  return (
    <Container>
      <NavBar />
    </Container>
  );
};
