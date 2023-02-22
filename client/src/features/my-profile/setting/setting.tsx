import { useMemo, useState, useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Input, Button, Form } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col, Row } from "src/components";
import CloseIcon from "src/assets/close@2x.png";
import TriangleIcon from "src/assets/triangle@2x.png";

const Container = styled(Col)`
  width: 750px;
  height: 1176px;
  background: #ffffff;
  border-radius: 36px;
  padding: 16px 30px;
  box-sizing: border-box;
`;

const Topbar = styled(Row)`
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #999999;
  line-height: 28px;
`;

const CloseBtn = styled(Image)`
  width: 22px;
  height: 22px;
`;

const StyledInput = styled(Input)`
  background: #f0f3f7;
  border-radius: 20px;
  padding: 32px 18px;
  box-sizing: border-box;
  margin-bottom: 18px;
  height: 96px;
`;

const NameInput = styled(StyledInput)`
  margin-top: 28px;
`;

const DescriptionInput = styled(StyledInput)`
  height: 262px;
`;

const AvatarRow = styled(View)`
  justify-content: space-between;
  position: relative;
  margin-bottom: 18px;
`;

const UploadBtnWrapper = styled(Row)`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 36px;
  box-sizing: border-box;
`;

const Avatar = styled(NameInput)`
  padding: 0;
  padding-left: 18px;
  width: 100%;
  margin: 0;
`;

const UploadBtnIcon = styled(Image)`
  width: 14px;
  height: 16px;
`;

const UploadBtnText = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #999999;
  line-height: 28px;
  margin-right: 6px;
`;

const PhoneNumRow = styled(Row)`
  background: #f0f3f7;
  padding-left: 18px;
  padding-right: 42px;
  border-radius: 20px;
  justify-content: space-between;
`;

const PhoneNumInput = styled(Input)`
  height: 96px;
`;

const GetVerifyCodeBtn = styled(View)`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #3388ff;
  line-height: 28px;
`;

const VerifyCodeInput = styled(NameInput)`
  margin-bottom: 64px;
`;

const SeparateBar = styled(View)`
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const ServiceRow = styled(Row)`
  margin: 14px 0 54px 0;
  justify-content: center;
`;
const SaveBtn = styled(Button)`
  width: 678px;
  height: 106;
  border-radius: 52px;
  background: #3388ff;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
`;

interface Props {
  onClose: () => void;
  save: () => void;
}

const Setting = (props: Props) => {
  const { onClose, save } = props;
  const uploadAvatar = useCallback(async () => {
    try {
      const { tempFilePaths } = await Taro.chooseImage({
        sourceType: ["album", "camera"],
      });
      await Taro.cloud.uploadFile({
        cloudPath: `user-photos/${Date.now()}.jpg`,
        filePath: tempFilePaths[0],
      });
      console.log("sucess");
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <Container>
      <Topbar>
        <Title>设置资料</Title>
        <CloseBtn src={CloseIcon} onClick={onClose} />
      </Topbar>
      <Form onSubmit={save}>
        <NameInput placeholder="请输入名字" />
        <DescriptionInput placeholder="请输入一句话介绍" />
        <AvatarRow>
          <Avatar value="个人头像" disabled />
          <UploadBtnWrapper onClick={uploadAvatar}>
            <UploadBtnText>请上传</UploadBtnText>
            <UploadBtnIcon src={TriangleIcon} onClick={onClose} />
          </UploadBtnWrapper>
        </AvatarRow>
        <PhoneNumRow>
          <PhoneNumInput placeholder="请输入更换的手机号" />
          <GetVerifyCodeBtn>获取验证码</GetVerifyCodeBtn>
        </PhoneNumRow>
        <VerifyCodeInput placeholder="请输入验证码" type="number" />
        <SeparateBar style={{ width: "90%" }} />
        <ServiceRow>
          <UploadBtnText>客服中心</UploadBtnText>
          <UploadBtnIcon src={TriangleIcon} onClick={onClose} />
        </ServiceRow>
        <SaveBtn>保存</SaveBtn>
      </Form>
    </Container>
  );
};

export default Setting;
