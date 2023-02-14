import { View } from "@tarojs/components";
import React, { useMemo } from "react";
import { styled } from "linaria/react";

const Container = styled(View)`
  display: flex;
  flex-direction: row;
`;

const Column = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* padding: 0 20px; */
`;

interface Item {
  width: number;
  height: number;
}

const groupItems = (items: Item[]) => {
  let letColHeight = 0;
  let rightColHeight = 0;
  let leftItems: Item[] = [];
  let rightItems: Item[] = [];
  for (let i = 0; i < items.length; i++) {
    if (letColHeight <= rightColHeight) {
      leftItems.push(items[i]);
      letColHeight += items[i].height;
    } else {
      rightItems.push(items[i]);
      rightColHeight += items[i].height;
    }
  }

  return { leftItems, rightItems };
};

// const getWindowWidth = (() => {
//   let windowWidth;
//   return () => {
//     if (windowWidth) return windowWidth;
//     return new Promise((reslove) => {
//       getSystemInfo({
//         success: (res) => {
//           windowWidth = res.windowWidth;
//           reslove(windowWidth);
//         },
//       });
//     });
//   };
// })();

interface ImgInfo {
  width: number;
  height: number;
  path?: string;
}

interface Props {
  items?: Item[];
  renderItem: (v: any) => React.ReactElement;
}

export const MasonryLayout: React.FC<Props> = ({ items = [], renderItem }) => {
  const { leftItems, rightItems } = useMemo(() => {
    return groupItems(items);
  }, [items]);

  return (
    <Container>
      {[leftItems, rightItems].map((colImgs, colIndex) => {
        return (
          <Column key={colIndex}>
            {colImgs.map((v, index) => {
              return renderItem(v);
              // (
              //   <Item
              //     key={index}
              //     src={v.src!}
              //     style={{ height: `${v.height}px` }}
              //     // mode="widthFix"
              //   />
              // );
            })}
          </Column>
        );
      })}
    </Container>
  );
};
