import { View } from "@tarojs/components";
import { styled } from "linaria/react";
import { useMemo, useState } from "react";

import useSystemInfo from "../use-system-info";
import SearchBar, { SEARCH_BAR_HEIGHT } from "../search-bar";
import CaseList, { ROW_HEIGHT } from "../case-list";

const SEPARATE_BAR_HEIGHT = 33;

const BAR_HEIGHT = 162;
const PADDING_TOP = 24;

const Container = styled(View)`
  padding-top: ${PADDING_TOP}px;
`;

const SeparateBar = styled(View)`
  background: rgba(0, 0, 0, 0.1);
  margin: 13px 16px;
  height: 1px;
`;

function buildData(offset = 0) {
  return Array(51)
    .fill(0)
    .map((_, i) => {
      return {
        type: "string",
        description: "三行字三行字三行字三行字三行三行字三行字",
        img: "https://i.pinimg.com/236x/7f/24/8c/7f248c9e18abe79de0d6c79617e03361.jpg",
      };
    });
}

const Findings = () => {
  const data = buildData();
  const [systemInfo, error] = useSystemInfo();

  const [height, cardSize] = useMemo(() => {
    if (!systemInfo) return [];
    const ratio = systemInfo.windowWidth / 750;
    const h =
      systemInfo.windowHeight -
      (SEARCH_BAR_HEIGHT + SEPARATE_BAR_HEIGHT + BAR_HEIGHT) * ratio;

    const itemSize = ratio * ROW_HEIGHT;
    return [h, itemSize];
  }, [systemInfo]);

  const renderContent = () => {
    if (error) return <View>error</View>;
    if (!height || !cardSize) return <View>loading</View>;
    return <CaseList height={height} itemSize={cardSize} cases={data} />;
  };

  return (
    <Container>
      <SearchBar />
      <SeparateBar />
      {renderContent()}
    </Container>
  );
};

export default Findings;
