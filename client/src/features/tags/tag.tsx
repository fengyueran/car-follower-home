import { View, Text, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col } from "src/components";

const Container = styled(View)`
  width: 160px;
  flex-shrink: 0;
  margin-bottom: 64px;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

const Icon = styled(Image)`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-sizing: border-box;
  border: 2px solid rgba(51, 136, 255, 1);
  margin-bottom: 26px;
  background: #eef1f5;
`;

const Name = styled(Text)`
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  line-height: 32px;
`;

interface Props {
  name: string;
  img: string;
  highlight: boolean;
  onClick: () => void;
}

const Tag: React.FC<Props> = ({ name, img, highlight, onClick }) => {
  return (
    <Container data-name={name} onClick={onClick}>
      <Icon
        src=""
        style={{
          border: highlight ? "2px solid rgba(51, 136, 255, 1)" : "none",
        }}
      />
      <Name style={{ color: highlight ? "#000000" : "#999999" }}>{name}</Name>
    </Container>
  );
};

export default Tag;
