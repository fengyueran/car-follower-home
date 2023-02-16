import { Text } from "@tarojs/components";
import { useRef, useState, useCallback } from "react";
import { styled } from "linaria/react";

const Container = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #999999;
  line-height: 28px;
`;

const GetVerifyCodeBtn = styled(Text)`
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #3388ff;
  line-height: 28px;
`;

const SendVerifyCodeBtn = () => {
  const secondsRef = useRef(5);
  const [timerVisible, setTimerVisible] = useState(false);
  const [, fourceUpdate] = useState({});

  const getVerifyCode = useCallback(() => {
    setTimerVisible(true);
    const timer = setInterval(() => {
      secondsRef.current -= 1;
      console.log("secondsRef.current", secondsRef.current);
      if (secondsRef.current === 0) {
        clearInterval(timer);
        setTimerVisible(false);
      } else {
        fourceUpdate({});
      }
    }, 1000);
  }, []);

  if (timerVisible) {
    return <Container>{`重新发送${secondsRef.current}s`}</Container>;
  }

  return (
    <GetVerifyCodeBtn onClick={getVerifyCode}>获取验证码</GetVerifyCodeBtn>
  );
};

export default SendVerifyCodeBtn;
