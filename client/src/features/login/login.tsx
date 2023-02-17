import { View, Button } from "@tarojs/components";
import { styled } from "linaria/react";
import { navigateTo } from "@tarojs/taro";

import { Col } from "src/components";
import Statement from "./statement";

const Container = styled(Col)`
  height: 100vh;
  background: #f5f5f5;
  box-sizing: border-box;
`;

const Img = styled(View)`
  height: 892px;
  border: 1px dashed;
  margin: 0 34px;
`;

const LoginBtn = styled(Button)`
  height: 106px;
  background: #3388ff;
  flex-grow: 0 1;
  border-radius: 52px;
  line-height: 106px;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  margin: 0 38px;
`;

const TextBtn = styled(View)`
  height: 32px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #3388ff;
  line-height: 32px;
  width: 100%;
  text-align: center;
  margin-top: 32px;
`;

const SpaceY = styled(View)`
  height: 192px;
`;

const Login = () => {
  return (
    <Container>
      <Img>图片占位</Img>
      <LoginBtn
        className="login-btn"
        openType="getPhoneNumber"
        // onClick={onClick}
        onGetPhoneNumber={(data) => {
          console.log("8888", data);
        }}
      >
        一键登录
      </LoginBtn>
      <TextBtn
        onClick={() => {
          navigateTo({ url: "/pages/verify/index" });
        }}
      >
        手机号码登录/注册
      </TextBtn>
      <SpaceY />
      <Statement />
    </Container>
  );
};

export default Login;
