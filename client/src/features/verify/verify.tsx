import { View, Text, Input, Image, Button } from "@tarojs/components";
import { useRef, useState, useCallback } from "react";
import { styled } from "linaria/react";
import { navigateTo } from "@tarojs/taro";

import { isPhoneNum } from "src/utils";
import { Row, Col } from "src/components";
import ArrowIcon from "src/assets/arrow@2x.png";

import SendVerifyCodeBtn from "./send-verify-code-btn";

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

const InputWrapper = styled(Row)`
  height: 80px;
  border-bottom: 2px solid #f5f5f5;
  padding: 0 12px;
`;

const CountryCode = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 32px;
`;

const Icon = styled(Image)`
  width: 32px;
  height: 32px;
  margin-right: 24px;
`;

const PhoneNum = styled(Input)`
  flex-grow: 1;
`;

const VerifyCode = styled(Input)`
  flex-grow: 1;
`;

const Space = styled(View)`
  height: 44px;
`;
const LoginBtn = styled(Button)`
  box-sizing: border-box;
  background-color: rgba(51, 136, 255, 1);
  border-radius: 52px;
  color: #fff;
  width: 100%;
  margin-top: 376px;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.3;
`;

const InvalidHint = styled(Text)`
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #d377cd;
  line-height: 34px;
  margin: 16px 10px;
`;

const PHONE_NUM_LENGTH = 11;

const Verify = () => {
  const [phoneNumInvalid, setPhoneNumInvalid] = useState(false);
  const [canLogin, setCanLogin] = useState(false);

  const phoneNumRef = useRef("");
  const verifyCodeRef = useRef("");
  const inputCodeRef = useRef("");

  const onPhoneNumInput = useCallback(
    (e) => {
      phoneNumRef.current = e.target.value;
      if (phoneNumRef.current.length === PHONE_NUM_LENGTH) {
        if (!isPhoneNum(phoneNumRef.current)) {
          setPhoneNumInvalid(true);
        }
      } else if (phoneNumInvalid) {
        setPhoneNumInvalid(false);
      }
    },
    [phoneNumInvalid]
  );

  const onVerifyCodeInput = useCallback((e) => {
    inputCodeRef.current = e.target.value;
    if (inputCodeRef.current.length === 6) {
      setCanLogin(true);
    }
  }, []);

  const login = useCallback(() => {
    if (canLogin) {
      if (inputCodeRef.current !== verifyCodeRef.current) {
        navigateTo({ url: "/pages/tags/index" });
      }
    }
  }, [canLogin]);

  const onVerifyCodeChange = useCallback((code) => {
    verifyCodeRef.current = code;
  }, []);

  return (
    <Container>
      <Slogon>登录后更精彩</Slogon>
      <Statement>我们将保护你的个人隐私</Statement>
      <InputWrapper
        style={{ borderBottomColor: phoneNumInvalid ? "#d377cd" : "#f5f5f5" }}
      >
        <CountryCode>+86</CountryCode>
        <Icon src={ArrowIcon} />
        <PhoneNum
          type="number"
          placeholder="请输入手机号"
          maxlength={PHONE_NUM_LENGTH}
          onInput={onPhoneNumInput}
        />
      </InputWrapper>
      {phoneNumInvalid && (
        <InvalidHint>手机号码格式不正确，请重新输入</InvalidHint>
      )}
      <Space />
      <InputWrapper>
        <VerifyCode
          type="number"
          placeholder="请输入验证码"
          onInput={onVerifyCodeInput}
        />
        <SendVerifyCodeBtn onVerifyCodeChange={onVerifyCodeChange} />
      </InputWrapper>
      <LoginBtn onClick={login} style={{ opacity: canLogin ? 1 : 0.3 }}>
        登录
      </LoginBtn>
    </Container>
  );
};

export default Verify;
