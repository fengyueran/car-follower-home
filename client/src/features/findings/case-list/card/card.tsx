import { View, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col } from "src/components";

const IMG_HEIGHT = 363;
const DESCRIPTION_HEIGHT = 168;

export const CARD_HEIGHT = IMG_HEIGHT + DESCRIPTION_HEIGHT;

const RootContainer = styled(Col)`
  background: #fff;
  border-radius: 10px;
  width: 100%;
`;

const Img = styled(Image)`
  width: 100%;
  height: ${IMG_HEIGHT}px;
`;

const Description = styled(View)`
  width: 100%;
  height: ${DESCRIPTION_HEIGHT}px;
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
      <Img src={img} />
      <Description>{description}</Description>
    </RootContainer>
  );
};

export default Card;
