import React from "react";
import { styled } from "linaria/react";

import { View } from "@tarojs/components";
import { Row } from "src/components";
import Card, { CardProps, CARD_HEIGHT } from "../card";

const PADDING_BOTTOM_HEIGHT = 10;

export const ROW_HEIGHT = CARD_HEIGHT + PADDING_BOTTOM_HEIGHT;

const RootContainer = styled(Row)`
  width: 100%;
  padding-bottom: ${PADDING_BOTTOM_HEIGHT}px;
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
    <RootContainer id={id}>
      {renderCard(left)}
      <Space />
      {renderCard(right)}
    </RootContainer>
  );
};

export default React.memo(CardRow);
