import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: 'src/.vuepress/dist',
  lang: "zh-CN",
  title: "yu-knowledge",
  description: "yu-knowledge",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
