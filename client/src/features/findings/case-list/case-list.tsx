import { View, Text } from "@tarojs/components";
import { styled } from "linaria/react";
import { useMemo } from "react";

import { Col, VirtualList } from "src/components";
import { CardProps } from "./card";
import CardRow from "./card-row";

const RootContainer = styled(View)`
  padding: 0 8px 0 8px;
  justify-content: center;
  min-height: 600px;
  background: #f5f5f5;
`;

const Spinner = styled(Col)`
  height: 140px;
  align-items: center;
  text-align: center;
`;

const AllLoadedTip = styled(Col)`
  align-items: center;
  height: 80px;
  justify-content: center;
`;

interface Props {
  height: number;
  itemSize: number;
  loading: boolean;
  cases: CardProps[];
  allCasesLoaded: boolean;
  fetchCases: () => void;
}

const CaseList: React.FC<Props> = ({
  cases,
  height,
  loading,
  itemSize,
  fetchCases,
  allCasesLoaded,
}) => {
  const itemData = useMemo(() => {
    let index = 0;
    let row = cases.slice(index * 2, index * 2 + 2);
    const rowList: [CardProps, CardProps][] = [];

    while (row.length) {
      rowList.push(row as [CardProps, CardProps]);
      index += 1;
      row = cases.slice(index * 2, index * 2 + 2);
    }
    return rowList;
  }, [cases]);

  const renderBottom = () => {
    if (allCasesLoaded) {
      return <AllLoadedTip>我是有底线的</AllLoadedTip>;
    }
    return (
      loading && (
        <Spinner>
          <View className="loader" />
          <Text>加载中...</Text>
        </Spinner>
      )
    );
  };

  return (
    <RootContainer>
      <VirtualList
        height={height}
        width="100%"
        itemData={itemData}
        itemCount={itemData.length}
        itemSize={itemSize}
        renderBottom={renderBottom()}
        onScroll={({ scrollDirection, scrollOffset }) => {
          if (
            !loading &&
            !allCasesLoaded &&
            scrollDirection === "forward" &&
            scrollOffset > (itemData.length - 5) * itemSize
          ) {
            fetchCases();
          }
        }}
      >
        {CardRow}
      </VirtualList>
    </RootContainer>
  );
};

export default CaseList;
