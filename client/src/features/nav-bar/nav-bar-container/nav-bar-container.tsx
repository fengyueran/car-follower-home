import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import NavBar from "../nav-bar";

const Container = styled(View)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavBarContainer = () => {
  return (
    <Container disableScroll="true">
      <NavBar />
    </Container>
  );
};

export default NavBarContainer;
