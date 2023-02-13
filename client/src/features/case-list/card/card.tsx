import { View, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col } from "src/components";

const RootContainer = styled(Col)`
  background: #fff;
  border-radius: 10px;
  width: 100%;
`;

const Img = styled(Image)`
  width: 100%;
`;

const Description = styled(View)`
  width: 100%;
  padding: 16px 56px 16px 20px;
  box-sizing: border-box;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 44px;
`;

export interface CardProps {
  type: string;
  description: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ img, description }) => {
  return (
    <RootContainer>
      <Img src={img} style={{ height: 181 }} />
      <Description style={{ height: 84 }}>{description}</Description>
    </RootContainer>
  );
};

export default Card;
