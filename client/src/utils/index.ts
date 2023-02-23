import Taro, { getSystemInfoSync } from "@tarojs/taro";

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

const readFile = (filePath: string): Promise<string> => {
  const mgr = Taro.getFileSystemManager();
  return new Promise((reslove, reject) => {
    mgr.readFile({
      filePath,
      encoding: "base64",
      success: (res) => {
        reslove(res.data as string);
      },
      fail: (res) => {
        reject(res);
      },
    });
  });
};

export const getElementByID = (id: string): Promise<Taro.Canvas> => {
  return new Promise((reslove, reject) => {
    const query = Taro.createSelectorQuery();
    query
      .select(`#${id}`)
      .node()
      .exec((res) => {
        console.log("query result", id, res);
        if (res && res[0]?.node) {
          reslove(res[0].node);
        } else {
          reject(res);
        }
      });
  });
};

export const convertCanvasToBase64 = async (canvasID: string) => {
  const canvas = await getElementByID(canvasID);

  const { tempFilePath } = await Taro.canvasToTempFilePath({
    canvas,
  });
  const base64 = await readFile(tempFilePath);
  return base64;
};
