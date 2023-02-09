import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import { Waterfall } from "src/components";

const Container = styled(View)`
  height: 800px;
  background: red;
`;

export const CarWaterfallContainer = () => {
  return (
    <Container>
      <Waterfall />
    </Container>
  );
};
