import { Text, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col } from "src/components";

const Container = styled(Col)`
  width: 160px;
  flex-shrink: 0;
  margin-bottom: 64px;
  text-align: center;
`;

const Icon = styled(Image)`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-sizing: border-box;
  border: 2px solid rgba(51, 136, 255, 1);
  margin-bottom: 26px;
`;

const Name = styled(Text)`
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 32px;
`;

interface Props {
  name: string;
  img: string;
}

const Tag: React.FC<Props> = ({ name, img }) => {
  return (
    <Container>
      <Icon src="" />
      <Name>{name}</Name>
    </Container>
  );
};

export default Tag;
