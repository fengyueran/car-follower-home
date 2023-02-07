import { View } from "@tarojs/components";
import { styled } from "linaria/react";

const Container = styled(View)`
  color: red;
`;

interface Props {
  name: string;
}

export const Item: React.FC<Props> = ({ name }) => {
  return <Container>{name}</Container>;
};
