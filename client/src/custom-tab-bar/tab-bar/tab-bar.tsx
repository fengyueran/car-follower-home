import { View } from "@tarojs/components";
import { styled } from "linaria/react";
import { switchTab, useRouter } from "@tarojs/taro";
import { useState, useCallback } from "react";

import { Item } from "./item";

const Container = styled(View)`
  display: flex;
  height: 162px;
  justify-content: space-between;
  font-weight: 500;
  font-size: 32px;
  background: #fff;
  padding-top: 30px;
  box-sizing: border-box;
`;

const pages = [
  { name: "发现", route: "/pages/index/index" },
  { name: "我的", route: "/pages/my-profile/index" },
];

const TabBar = () => {
  const { path } = useRouter();
  const onClick = useCallback(
    (e) => {
      const { url } = e.target.dataset;
      if (path !== url) {
        switchTab({ url });
      }
    },
    [path]
  );

  return (
    <Container disableScroll="true" onClick={onClick}>
      {pages.map((i) => {
        return <Item key={i.name} {...i} active={path === i.route} />;
      })}
    </Container>
  );
};

export default TabBar;
