import { useEffect, useState } from "react";

import { getSystemInfoAsync } from "src/utils";

interface SystemInfo {
  screenHeight: number;
  statusBarHeight: number;
  windowWidth: number;
  windowHeight: number;
}
const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>();
  const [error, setError] = useState();
  useEffect(() => {
    const getSystemInfo = async () => {
      try {
        const info = await getSystemInfoAsync();
        setSystemInfo(info);
      } catch (err) {
        console.log("getSystemInfo error:", err);
        setError(err);
      }
    };
    getSystemInfo();
  }, []);

  return [systemInfo, error];
};

export default useSystemInfo;
