import { useCallback, useEffect, useMemo, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row, Radar } from "src/components";

const Container = styled(Col)`
  padding: 66px 36px 34px 36px;
  border: dashed 1px;
  margin-top: 56px;
`;

const Header = styled(Row)`
  justify-content: space-between;
  overflow: visible;
`;

const Title = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
`;

const Index = styled(Text)`
  font-size: 72px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #d377cd;
  margin-top: -25px;
`;

const RadarWrapper = styled(View)`
  width: 100%;
  height: 486px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-width: 1px 0;
`;

const Footer = styled(Row)`
  justify-content: space-between;
  overflow: visible;
  font-size: 24px;
  color: #999999;
  font-family: PingFangSC-Regular, PingFang SC;
  margin-top: 8px;
`;

const Mileage = styled(Text)`
  font-weight: 400;
`;

const DetailBtn = styled(View)`
  font-weight: 600;
  font-family: PingFangSC-Semibold, PingFang SC;
  background: #f0f3f7;
  border-radius: 18px;
  height: 40px;
  box-sizing: border-box;
  padding: 6px 22px;
  display: flex;
  align-items: center;
  line-height: 0;
`;

const FactoryIndex = () => {
  return (
    <Container>
      <Header>
        <Title>工业垃圾指数</Title>
        <Index>60%</Index>
      </Header>
      <RadarWrapper>
        <Radar />
      </RadarWrapper>
      <Footer>
        <Mileage>393,237,299 公里测试里程</Mileage>
        <DetailBtn>查看详情</DetailBtn>
      </Footer>
    </Container>
  );
};

export default FactoryIndex;
