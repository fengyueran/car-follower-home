import { View } from "@tarojs/components";
import { styled } from "linaria/react";
import { useMemo } from "react";

import { getSystemInfo } from "src/utils";
import SearchBar, { SEARCH_BAR_HEIGHT } from "../search-bar";
import CaseList, { ROW_HEIGHT } from "../case-list";

const SEPARATE_BAR_HEIGHT = 33;

const TAB_BAR_HEIGHT = 162;
const PADDING_TOP = 24;

const Container = styled(View)`
  padding-top: ${PADDING_TOP}px;
`;

const SeparateBar = styled(View)`
  background: rgba(0, 0, 0, 0.1);
  margin: 13px 16px;
  height: 1px;
`;

const Findings = () => {
  const [height, cardSize] = useMemo(() => {
    const systemInfo = getSystemInfo();
    const ratio = systemInfo.windowWidth / 750;
    const h =
      systemInfo.windowHeight -
      (SEARCH_BAR_HEIGHT + SEPARATE_BAR_HEIGHT + TAB_BAR_HEIGHT) * ratio;

    const itemSize = ratio * ROW_HEIGHT;
    return [h, itemSize];
  }, []);

  return (
    <Container>
      <SearchBar />
      <SeparateBar />
      <CaseList height={height} itemSize={cardSize} />;
    </Container>
  );
};

export default Findings;
