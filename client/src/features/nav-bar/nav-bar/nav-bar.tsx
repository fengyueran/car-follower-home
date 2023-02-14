import { styled } from "linaria/react";

import { Row } from "src/components";
import { Item } from "./item";

const Container = styled(Row)`
  height: 162px;
  flex-grow: 1;
  justify-content: space-between;
  font-weight: 500;
  font-size: 32px;
  padding: 0 150px;
  background: #fff;
`;

const items = [{ name: "发现" }, { name: "我的" }];

const NavBar = () => {
  const activeTab = "发现";
  return (
    <Container>
      {items.map((i) => {
        return <Item key={i.name} {...i} active={activeTab === i.name} />;
      })}
    </Container>
  );
};

export default NavBar;
