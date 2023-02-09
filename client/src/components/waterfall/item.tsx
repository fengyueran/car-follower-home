import { View, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col } from "src/components";

const Container = styled(Col)`
  width: 100%;
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const Description = styled(View)`
  width: 100%;
`;

interface Props {
  src: string;
  height: number;
  description: string;
}

export const Item: React.FC<Props> = ({ src, height, description }) => {
  return (
    <Container style={{ height: `${height}rpx` }}>
      <Img src={src} />
      {/* <Description>{description}</Description> */}
    </Container>
  );
};
