import { View } from "@tarojs/components";
import { styled } from "linaria/react";

const Container = styled(View)`
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  line-height: 40px;
  flex-grow: 1;
  text-align: center;
`;

interface Props {
  name: string;
  active: boolean;
  route: string;
}

export const Item: React.FC<Props> = ({ name, route, active }) => {
  return (
    <Container data-url={route} style={{ color: active ? "#000" : "#888" }}>
      {name}
    </Container>
  );
};
