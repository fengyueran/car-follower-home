import { getSystemInfoSync } from "@tarojs/taro";

export const getSystemInfo = (() => {
  let _systemInfo;

  return () => {
    if (_systemInfo) return _systemInfo;

    _systemInfo = getSystemInfoSync();

    return _systemInfo;
  };
})();
