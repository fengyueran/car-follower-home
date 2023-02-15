import { View, Button } from "@tarojs/components";
import { styled } from "linaria/react";

import { Col } from "src/components";

const Container = styled(Col)`
  height: 100vh;
  background: #f5f5f5;
  box-sizing: border-box;
`;

const Img = styled(View)`
  height: 892px;
`;

const LoginBtn = styled(Button)`
  height: 106px;
  background: #3388ff;
  width: 100%;
  border-radius: 52px;
  line-height: 106px;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
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

const Login = () => {
  return (
    <Container>
      <Img>图片占位</Img>
      <LoginBtn>一键登录</LoginBtn>
      <TextBtn>手机号码登录/注册</TextBtn>
    </Container>
  );
};

export default Login;
