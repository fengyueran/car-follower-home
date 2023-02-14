import { View } from "@tarojs/components";
import { styled } from "linaria/react";
import { useMemo } from "react";

import { VirtualList } from "src/components";
import { CardProps } from "./card";
import CardRow from "./card-row";

const RootContainer = styled(View)`
  padding: 0 8px 0 8px;
  justify-content: center;
  min-height: 600px;
  background: #f5f5f5;
`;

interface Props {
  height: number;
  itemSize: number;
  cases: CardProps[];
}

const CaseList: React.FC<Props> = ({ height, itemSize, cases }) => {
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
    // if (allCasesLoaded) {
    //   return <BottomHint>加载完毕</BottomHint>;
    // }
    // return (
    //   loading && (
    //     <Spinner>
    //       <View className="loader" />
    //     </Spinner>
    //   )
    // );
    return <View style={{ height: 100 }}>我是有底线的</View>;
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
      >
        {CardRow}
      </VirtualList>
    </RootContainer>
  );
};

export default CaseList;
