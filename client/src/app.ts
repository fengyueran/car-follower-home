import { Component, PropsWithChildren } from "react";
import Taro from "@tarojs/taro";

import "./app.css";

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init({ env: "cloud1-9g7uf1f2e67c3886" });
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
