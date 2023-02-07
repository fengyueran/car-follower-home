import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const Col = styled(View)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`;
