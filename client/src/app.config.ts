export default {
  pages: [
    "pages/index/index",
    "pages/login/index",
    "pages/verify/index",
    "pages/tags/index",
    "pages/my-profile/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  cloud: true,
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/index/index",
        text: "发现",
      },
      {
        pagePath: "pages/my-profile/index",
        text: "我的",
      },
    ],
    position: "bottom",
  },
};
