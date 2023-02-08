import { View } from "@tarojs/components";
import { styled } from "linaria/react";

import { MasonryLayout } from "src/components";

const Container = styled(View)`
  height: 500px;
  background: red;
`;

export const CarWaterfallContainer = () => {
  return (
    <Container>
      <MasonryLayout />
    </Container>
  );
};
