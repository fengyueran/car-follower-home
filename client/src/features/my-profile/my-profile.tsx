import { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row } from "src/components";
import StarIcon from "src/assets/star@2x.png";
import { getSystemInfo } from "src/utils";
import { ROW_HEIGHT } from "src/features/findings/case-list";

import CollectList from "./collect-list";
import Setting from "./setting";

const USER_PADDING_TOP = 24;
const USER_PORTRAIT_HEIGHT = 234;
const COLLECT_BTN_HEIGHT = 102;
const SEPARATE_BAR_HEIGHT = 21;
const TAB_BAR_HEIGHT = 162;

const Container = styled(Col)``;

const User = styled(Row)`
  margin: ${USER_PADDING_TOP}px 30px 0 30px;
  position: relative;
`;

const Portrait = styled(View)`
  width: ${USER_PORTRAIT_HEIGHT}px;
  height: ${USER_PORTRAIT_HEIGHT}px;
  border-radius: 20px;
  background: #3388ff;
  flex-shrink: 0;
`;

const UserInfo = styled(Col)`
  margin-top: 5px;
  margin-left: 24px;
  height: 234px;
`;

const UserName = styled(Text)`
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 40px;
`;

const ConnectBtnWrapper = styled(Row)`
  width: 170px;
  height: 36px;
  background: #e9d1e7;
  border-radius: 6px;
  padding: 0 10px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const Space = styled(View)`
  flex-grow: 1;
`;

const ConnectText = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #d377cd;
  line-height: 36px;
  margin-left: 6px;
`;

const Star = styled(Image)`
  width: 26px;
  height: 24px;
`;

const Description = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 44px;
`;

const SettingBtn = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #888888;
  line-height: 44px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ConnectBtn = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 28px;
  margin: 54px 0 24px 32px;
`;

const SeparateBar = styled(View)`
  background: #f5f5f5;
  margin: 0 32px 20px 32px;
  height: 1px;
`;

const SettingWrapper = styled(View)`
  position: fixed;
  top: 0;
  padding-top: 270px;
  background: rgba(0, 0, 0, 0.5);
`;

const MyProfile = () => {
  const [settingVisible, setSettingVisible] = useState(false);
  const [height, cardSize] = useMemo(() => {
    const systemInfo = getSystemInfo();
    const ratio = systemInfo.windowWidth / 750;
    const h =
      systemInfo.windowHeight -
      (USER_PADDING_TOP +
        USER_PORTRAIT_HEIGHT +
        COLLECT_BTN_HEIGHT +
        SEPARATE_BAR_HEIGHT +
        TAB_BAR_HEIGHT) *
        ratio;

    const itemSize = ratio * ROW_HEIGHT;
    return [h, itemSize];
  }, []);

  const onSettingClick = useCallback(() => {
    console.log("8888");
    setSettingVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setSettingVisible(false);
  }, []);

  const saveSetting = useCallback(() => {
    setSettingVisible(false);
  }, []);

  return (
    <Container>
      <User>
        <Portrait />
        <UserInfo>
          <UserName>洪泽鑫</UserName>
          <ConnectBtnWrapper>
            <Star src={StarIcon} />
            <ConnectText>xxx人收藏</ConnectText>
          </ConnectBtnWrapper>
          <Space />
          <Description>自动驾驶科普博主，知乎汽车话题优秀答主</Description>
        </UserInfo>
        <SettingBtn onClick={onSettingClick}>设置</SettingBtn>
      </User>
      <ConnectBtn>收藏</ConnectBtn>
      <SeparateBar />
      <CollectList height={height} itemSize={cardSize} />
      {settingVisible && (
        <SettingWrapper>
          <Setting onClose={onClose} save={saveSetting} />
        </SettingWrapper>
      )}
    </Container>
  );
};

export default MyProfile;
