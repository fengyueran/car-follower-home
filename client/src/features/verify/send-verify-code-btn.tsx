import { Text } from "@tarojs/components";
import { useRef, useState, useCallback } from "react";
import { styled } from "linaria/react";
import Taro from "@tarojs/taro";

import { generateVerifyCode } from "src/utils";

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

const COUNTDOWN_DUARATION = 3;

interface Props {
  onVerifyCodeChange: (code: string) => void;
}
const SendVerifyCodeBtn: React.FC<Props> = ({ onVerifyCodeChange }) => {
  const secondsRef = useRef(COUNTDOWN_DUARATION);
  const [timerVisible, setTimerVisible] = useState(false);
  const [, fourceUpdate] = useState({});

  const updateTimer = useCallback(() => {
    setTimerVisible(true);

    const timer = setInterval(() => {
      secondsRef.current -= 1;
      if (secondsRef.current === 0) {
        secondsRef.current = COUNTDOWN_DUARATION;
        clearInterval(timer);
        setTimerVisible(false);
      } else {
        fourceUpdate({});
      }
    }, 1000);
  }, []);

  const getVerifyCode = useCallback(async () => {
    updateTimer();
    try {
      const data = await Taro.cloud.callFunction({
        name: "sendSms",
        data: {
          phoneNum: "+8613141234125",
          content: generateVerifyCode(),
        },
      });
      onVerifyCodeChange("12");
    } catch (err) {
      console.log("err", err);
    }
  }, [updateTimer, onVerifyCodeChange]);

  if (timerVisible) {
    return <Container>{`重新发送${secondsRef.current}s`}</Container>;
  }

  return (
    <GetVerifyCodeBtn onClick={getVerifyCode}>获取验证码</GetVerifyCodeBtn>
  );
};

export default SendVerifyCodeBtn;
