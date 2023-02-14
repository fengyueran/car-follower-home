import { View } from "@tarojs/components";
import { styled } from "linaria/react";
import { useMemo } from "react";

import { VirtualList } from "src/components";
import { CardProps } from "../card";
import CardRow from "../card-row";

const RootContainer = styled(View)`
  padding: 0 8px 0 8px;
  justify-content: center;
  min-height: 600px;
  background: #f5f5f5;
`;

interface Props {
  cases: CardProps[];
}

const CaseList: React.FC<Props> = ({ cases }) => {
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

  return (
    <RootContainer>
      <VirtualList
        height={800}
        width="100%"
        itemData={itemData}
        itemCount={itemData.length}
        itemSize={270}
      >
        {CardRow}
      </VirtualList>
    </RootContainer>
  );
};

export default CaseList;
