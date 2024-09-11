// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性
  compatibilityDate: "2024-04-03",
  // 开发配置
  devServer: {
    host: "0.0.0.0",
  },
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
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "@nuxtjs/robots",
    "@nuxtjs/mdc",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-schema-org",
    // "@nuxtjs/sitemap",
  ],
  // 应用配置
  app: {
    head: {
      charset: "utf-8",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        { name: "theme-color", content: "#fff" },
      ],
      // link: [{ rel: "manifest", href: "/manifest.json" }],
      script: [],
    },
  },
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
  // 站点配置 Seo
  site: {
    url: "https://www.xukangr.com",
    name: "徐康的个人主页",
    trailingSlash: true,
  },
  // 地图配置
  // sitemap: {
  //   defaultSitemapsChunkSize: 5000,
  //   sitemaps: true,
  //   xsl: false,
  // excludeAppSources: false,
  // sources: ["/api/__sitemap__/urls"],
  // autoI18n: false,
  // autoLastmod: true,
  // experimentalWarmUp: true,
  // experimentalCompression: true,
  // cacheMaxAgeSeconds: 86400,
  // },
  // MDC 配置
  mdc: {
    highlight: {
      langs: [
        "abap",
        "actionscript-3",
        "ada",
        "apex",
        "applescript",
        "asm",
        "astro",
        "awk",
        "ballerina",
        "bat",
        "batch",
        "c",
        "clojure",
        "cmake",
        "cobol",
        "codeql",
        "coffee",
        "cpp",
        "crystal",
        "csharp",
        "css",
        "cue",
        "d",
        "dart",
        "diff",
        "docker",
        "dream-maker",
        "elixir",
        "elm",
        "erb",
        "erlang",
        "fsharp",
        "gherkin",
        "git-commit",
        "git-rebase",
        "glsl",
        "gnuplot",
        "go",
        "graphql",
        "groovy",
        "hack",
        "haml",
        "handlebars",
        "haskell",
        "hcl",
        "hlsl",
        "html",
        "ini",
        "java",
        "javascript",
        "json",
        "json5",
        "jsonc",
        "julia",
        "kotlin",
        "latex",
        "less",
        "liquid",
        "lisp",
        "logo",
        "lua",
        "make",
        "markdown",
        "marko",
        "matlab",
        "mdx",
        "nginx",
        "nim",
        "nix",
        "objective-c",
        "objective-cpp",
        "ocaml",
        "pascal",
        "perl",
        "php",
        "postcss",
        "powershell",
        "prisma",
        "prolog",
        "pug",
        "puppet",
        "purescript",
        "python",
        "r",
        "raku",
        "razor",
        "riscv",
        "ruby",
        "rust",
        "sas",
        "sass",
        "scala",
        "scheme",
        "scss",
        "shaderlab",
        "shell",
        "smalltalk",
        "solidity",
        "sparql",
        "sql",
        "ssh-config",
        "stata",
        "stylus",
        "svelte",
        "swift",
        "system-verilog",
        "tasl",
        "tcl",
        "tex",
        "toml",
        "tsx",
        "turtle",
        "twig",
        "typescript",
        "v",
        "vb",
        "verilog",
        "vhdl",
        "viml",
        "vue-html",
        "vue",
        "wasm",
        "wenyan",
        "xml",
        "xsl",
        "yaml",
        "zenscript",
      ], // 手动列出所有支持的语言
      theme: "one-dark-pro", // 使用 "one-dark-pro" 主题
      wrapperStyle: true, // 启用代码块包装样式
    },
    headings: {
      anchorLinks: false, // 禁用标题的锚点链接
    },
  },
  // 内容配置
  content: {
    highlight: {
      // 设置高亮主题，这里你使用的是 dracula 主题
      theme: "dracula", // 确保使用你想要的主题
      // preload: ["bash", "javascript", "typescript", "html"], // 预加载常用语言
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
