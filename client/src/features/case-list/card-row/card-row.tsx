import React from "react";
import { styled } from "linaria/react";

import { View } from "@tarojs/components";
import { Row } from "src/components";
import Card, { CardProps } from "../card";

const RootContainer = styled(Row)`
  width: 100%;
  padding-bottom: 10px;
`;

const Space = styled(View)`
  height: 100%;
  width: 10px;
  flex-shrink: 0;
`;

const PlaceHolder = styled(View)`
  width: 100%;
  display: flex;
`;

interface Props {
  id: string;
  index: number;
  data: [CardProps, CardProps][];
}

const renderCard = (v: CardProps) => {
  if (v) return <Card {...v} />;
  return <PlaceHolder />;
};

const CardRow: React.FC<Props> = ({ id, index, data }) => {
  const [left, right] = data[index];
  return (
    <RootContainer id={id} style={{ paddingBottom: 5 }}>
      {renderCard(left)}
      <Space />
      {renderCard(right)}
    </RootContainer>
  );
};

export default React.memo(CardRow);
