import { View, Text } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row } from "src/components";

const Container = styled(Col)`
  /* padding: 66px 36px 34px 36px; */

  margin-top: 50px;
`;

const Title = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
`;

const SeparateBar = styled(View)`
  background: rgba(0, 0, 0, 0.1);
  margin: 24px 0 20px 0;
  height: 1px;
`;

const UnitContainer = styled(Col)`
  border: dashed 1px;
  padding: 32px 36px;
`;

const UnitTitle = styled(Title)`
  font-weight: 600;
`;

const UnitRow = styled(Row)`
  padding: 20px 0;
  align-items: baseline;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const UnitName = styled(View)`
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #888888;
  width: 190px;
  flex-shrink: 0;
`;

const UnitDetail = styled(Title)`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #3388ff;
  line-height: 34px;
`;

const Parameter = () => {
  return (
    <Container>
      <Title>参数</Title>
      <SeparateBar />
      <UnitContainer>
        <UnitTitle>智能驾驶</UnitTitle>
        {[
          { unit: "感知相机", detail: "*8，LGIT前视摄像头模组，三星电机后" },
          { unit: "主要芯片", detail: "*自研FSD 芯片*2" },
        ].map(({ unit, detail }) => {
          return (
            <UnitRow key={unit}>
              <UnitName>{unit}</UnitName>
              <UnitDetail>{detail}</UnitDetail>
            </UnitRow>
          );
        })}
      </UnitContainer>
    </Container>
  );
};

export default Parameter;
