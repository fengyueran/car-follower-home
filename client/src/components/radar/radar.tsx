import Taro, { useReady } from "@tarojs/taro";
import { styled } from "linaria/react";
import { useMemo } from "react";
import { Canvas } from "@tarojs/components";

import { Row } from "../row";
import { drawRadarMap } from "./helpers";

const CANVAS_WIDTH = 320;
const CANVAS_HEIGHT = 200;

export const Container = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledCanvas = styled(Canvas)`
  //prettier-ignore
  width: ${CANVAS_WIDTH}Px;
  //prettier-ignore
  height: ${CANVAS_HEIGHT}Px;
`;

// 雷达图数据
const items = [
  { titleList: ["以父之名", "周杰伦"], score: 3, fullScore: 5 },
  { titleList: ["爱在西元前"], score: 5, fullScore: 10 },
  { titleList: ["简单爱"], score: 5, fullScore: 10 },
  { titleList: ["夜曲一响", "上台领奖"], score: 15, fullScore: 15 },
  { titleList: ["无与伦比"], score: 10, fullScore: 20 },
];

const Radar = () => {
  const dpr = useMemo(() => {
    return Taro.getSystemInfoSync().pixelRatio;
  }, []);

  useReady(() => {
    Taro.nextTick(() => {
      drawRadarMap({
        canvasID: "radar",
        edgeLength: 80,
        polygonCount: 5,
        items,
        dpr,
        canvasWidth: CANVAS_WIDTH,
        canvasHeight: CANVAS_HEIGHT,
      });
    });
  });
  return (
    <Container>
      <StyledCanvas type="2d" id="radar" />
    </Container>
  );
};

export default Radar;
