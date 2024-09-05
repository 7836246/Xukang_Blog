// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  // 第三方模块
  modules: [
    "@nuxt/devtools",
    '@nuxtjs/google-fonts',
    '@unocss/nuxt',
    '@nuxt/content',
    'arco-design-nuxt-module',
  ],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    layoutTransition: {name: 'layout', mode: 'out-in'},
  },
  arco: {
    importPrefix: 'A',
    hookPrefix: 'Arco',
    locales: ['getLocale'],
    localePrefix: 'Arco',
  },
  googleFonts: {
    families: {
      'Space Grotesk': {
        wght: [400, 500, 600, 700, 800, 900]
      },
      'Noto Sans Thai Looped': {
        wght: [400, 600, 700, 800]
      },
      'Fira Code': {
        wght: [400, 600, 700, 800]
      }
    }
  },
  //打包配置
  nitro: {
    //缩小捆绑包
    minify: true,
    //关闭源映射生成
    sourceMap: false,
    // 压缩公共资产
    compressPublicAssets: true
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
    externalVue: false
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
})
