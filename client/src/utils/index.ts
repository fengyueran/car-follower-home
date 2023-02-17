import { getSystemInfoSync } from "@tarojs/taro";

export const getSystemInfo = (() => {
  let _systemInfo;

  return () => {
    if (_systemInfo) return _systemInfo;

    _systemInfo = getSystemInfoSync();

    return _systemInfo;
  };
})();

export const isPhoneNum = (num: string = "") => {
  const PHONE_NUM_REG =
    /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
  const match = num.match(PHONE_NUM_REG);
  return match;
};

export const generateVerifyCode = () => {
  let codeStr = "";
  for (let i = 0; i < 6; i += 1) {
    const code = Math.floor(Math.random() * 10);
    codeStr = `${codeStr}${code}`;
  }
  console.log("codeStr", codeStr);
  return codeStr;
};
