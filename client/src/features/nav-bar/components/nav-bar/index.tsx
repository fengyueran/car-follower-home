import { styled } from "linaria/react";

import { Row } from "src/components";
import { Item } from "./item";

const Container = styled(Row)`
  height: 60px;
  margin: 20px 40px;
  flex-grow: 1;
  justify-content: space-between;
  font-weight: 500;
  font-size: 32px;
`;

const items = [
  { name: "首页" },
  { name: "发现" },
  { name: "+" },
  { name: "消息" },
  { name: "我的" },
];

export const NavBar = () => {
  return (
    <Container>
      {items.map((i) => {
        return <Item key={i.name} {...i} />;
      })}
    </Container>
  );
};
