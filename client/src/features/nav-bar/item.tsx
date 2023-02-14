import { View } from "@tarojs/components";
import { styled } from "linaria/react";

const Container = styled(View)`
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  line-height: 40px;
`;

interface Props {
  name: string;
  active: boolean;
}

export const Item: React.FC<Props> = ({ name, active }) => {
  return (
    <Container style={{ color: active ? "#000" : "#888" }}>{name}</Container>
  );
};
