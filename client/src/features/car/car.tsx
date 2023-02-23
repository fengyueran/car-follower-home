import { useCallback, useEffect, useMemo, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row } from "src/components";
import StarIcon from "src/assets/star@2x.png";
import FactoryIndex from "./factory-index";
import Parameter from "./parameter";

const Container = styled(Col)`
  padding: 22px 32px 0 32px;
`;

const User = styled(Row)`
  position: relative;
`;

const Portrait = styled(View)`
  width: 234px;
  height: 234px;
  border-radius: 20px;
  background: #3388ff;
  flex-shrink: 0;
`;

const UserInfo = styled(Col)`
  margin-top: 5px;
  margin-left: 24px;
  height: 234px;
`;

const UserName = styled(Text)`
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 40px;
`;

const ConnectBtnWrapper = styled(Row)`
  width: 150px;
  height: 36px;
  background: #bed5f4;
  border-radius: 6px;
  padding: 0 10px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const Space = styled(View)`
  flex-grow: 1;
`;

const ConnectText = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #317cf8;
  line-height: 36px;
  margin-left: 6px;
`;

const Star = styled(Image)`
  width: 26px;
  height: 24px;
`;

const Description = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 44px;
`;

const DetailBtn = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #888888;
  line-height: 44px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const Car = () => {
  useMemo(() => {
    Taro.setNavigationBarTitle({ title: "1324" });
  }, []);
  return (
    <Container>
      <User>
        <Portrait />
        <UserInfo>
          <UserName>Model Y 2022款 后轮驱动版</UserName>
          <ConnectBtnWrapper>
            <Star src={StarIcon} />
            <ConnectText>收藏车型</ConnectText>
          </ConnectBtnWrapper>
          <Space />
          <Description>话题简介话题简介话题简介话题简介话题简介</Description>
        </UserInfo>
        <DetailBtn>详情</DetailBtn>
      </User>
      <FactoryIndex />
      <Parameter />
    </Container>
  );
};

export default Car;
