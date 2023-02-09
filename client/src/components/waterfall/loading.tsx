import { View } from "@tarojs/components";
import { styled } from "linaria/react";

const Container = styled(View)`
  width: 100%;
  color: blue;
  text-align: center;
  height: 50px;
`;

export const Loading = () => {
  return <Container>loading</Container>;
};
