// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性
  compatibilityDate: "2024-04-03",
  // 开发工具
  devtools: { enabled: true },
  // 第三方模块
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/google-fonts",
    "@unocss/nuxt",
    "@nuxt/content",
    "arco-design-nuxt-module",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-typed-router",
    "@nuxtjs/mdc",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxtjs/fontaine",
    "@nuxtjs/robots",
  ],
  // 应用配置
  app: {},
  // TypeScript 配置
  typescript: {
    strict: true,
  },
  // 源映射配置
  sourcemap: {
    server: false,
    client: true,
  },
  // 颜色模式配置
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "light",
  },
  // MDC 配置
  mdc: {
    highlight: {
      langs: [
        "shell",
        "sh",
        "typescript",
        "python",
        "java",
        "php",
        "html",
        "css",
        "javascript",
        "json",
        "sql",
        "console",
      ],
      theme: "one-dark-pro",
      wrapperStyle: true,
    },
    headings: {
      anchorLinks: false,
    },
  },
  // 内容配置
  content: {
    highlight: {
      theme: "dracula",
    },
  },
  // Arco 配置
  arco: {
    importPrefix: "A",
    hookPrefix: "Arco",
    locales: ["getLocale"],
    localePrefix: "Arco",
  },
  // 字体配置
  googleFonts: {
    families: {
      "Space Grotesk": {
        wght: [400, 500, 600, 700, 800, 900],
      },
      "Noto Sans Thai Looped": {
        wght: [400, 600, 700, 800],
      },
      "Fira Code": {
        wght: [400, 600, 700, 800],
      },
    },
  },
  //打包配置
  nitro: {
    //缩小捆绑包
    minify: true,
    //关闭源映射生成
    sourceMap: false,
    // 压缩公共资产
    compressPublicAssets: true,
  },
  // Vite 配置
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    },
    // plugins: plugin,
  },
  //取消取消行内样式
  features: {
    inlineStyles: false,
  },
  // 构建配置
  experimental: {
    //  禁用 Vue3 兼容性
    externalVue: false,
  },
  // @ts-ignore 设置压缩
  meta: {
    renderSSRHeadOptions: {
      // typeof RenderSSRHeadOptions @unhead/schema
      omitLineBreaks: true,
    },
  },
  // 构建配置 启用 Nuxt4 兼容性
  future: {
    compatibilityVersion: 4,
  },
});
