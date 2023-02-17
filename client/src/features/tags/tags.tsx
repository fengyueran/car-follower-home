import {
  View,
  Text,
  Input,
  Image,
  Button,
  ITouchEvent,
} from "@tarojs/components";
import { useRef, useMemo, useCallback, useState } from "react";
import { styled } from "linaria/react";

import { Row, Col } from "src/components";
import { getSystemInfo } from "src/utils";

import Tag from "./tag";
import login from "../login";

const Container = styled(Col)`
  height: 100vh;
  box-sizing: border-box;
  padding: 100px 36px 0 36px;
`;

const Slogon = styled(Text)`
  font-size: 60px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #111111;
  line-height: 40px;
  margin-left: 12px;
`;

const Statement = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 24px;
  margin: 34px 0 68px 12px;
`;

const ComfirmBtn = styled(Button)`
  box-sizing: border-box;
  background-color: rgba(51, 136, 255, 1);
  border-radius: 52px;
  color: #fff;
  width: calc(100% - 72px);
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.3;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

const TagList = styled(View)`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 1000px;
`;

const TagRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const tagItems = [
  { name: "自动驾驶", img: "" },
  { name: "汽车芯片", img: "" },
  { name: "极氪", img: "" },
  { name: "小鹏", img: "" },
  { name: "理想", img: "" },
  { name: "智己", img: "" },
  { name: "奥运迪", img: "" },
  { name: "特斯拉", img: "" },
  { name: "极氪001", img: "" },
  { name: "蔚来ET5", img: "" },
  { name: "特斯拉Model3", img: "" },
  { name: "理想L9", img: "" },
];

const Tags = () => {
  const confirm = useCallback((e) => {}, []);
  const [selected, setSelected] = useState<string[]>([]);

  const rows = useMemo(() => {
    let index = 0;
    let row = tagItems.slice(index * 3, index * 3 + 3);
    const rowList: any[] = [];

    while (row.length) {
      rowList.push(row);
      index += 1;
      row = tagItems.slice(index * 3, index * 3 + 3);
    }
    return rowList;
  }, []);

  const onClick = useCallback(
    (e: ITouchEvent) => {
      const dataset = e.currentTarget.dataset;
      const name = dataset.name as string;
      const newSelected = [...selected];
      const index = selected.indexOf(name);
      if (index >= 0) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(name);
      }
      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <Container>
      <Slogon>选择感兴趣的标签</Slogon>
      <Statement>我们将保护你的个人信息</Statement>
      <TagList>
        {rows.map((r, index) => {
          return (
            <TagRow data-n={index} key={index}>
              {r.map((t) => {
                const highlight = selected.find((name) => name === t.name);
                console.log("highlight", highlight);
                return (
                  <Tag
                    {...t}
                    onClick={onClick}
                    key={t.name}
                    highlight={highlight}
                  />
                );
              })}
            </TagRow>
          );
        })}
      </TagList>
      <ComfirmBtn onClick={confirm}>至少选择4个标签</ComfirmBtn>
    </Container>
  );
};

export default Tags;
