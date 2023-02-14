import { getSystemInfo } from "@tarojs/taro";

export const getSystemInfoAsync = (() => {
  let _systemInfo;
  return () => {
    if (_systemInfo) return _systemInfo;
    return new Promise((reslove, reject) => {
      getSystemInfo({
        success: (res) => {
          _systemInfo = res;
          reslove(res);
        },
        fail: (e) => {
          reject(e);
        },
      });
    });
  };
})();
