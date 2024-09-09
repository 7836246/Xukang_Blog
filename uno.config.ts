import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

// 使用 defineConfig 定义 UnoCSS 配置
export default defineConfig({
  // 包含 UnoCSS 的预设
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // 自定义主题
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "ocean-green": {
        DEFAULT: "#379777",
        50: "#C8EBE0",
        100: "#B6E4D5",
        200: "#90D7BF",
        300: "#6BC9AA",
        400: "#46BB94",
        500: "#379777",
        600: "#2C795F",
        700: "#215B48",
        800: "#163D30",
        900: "#0B1F19",
        950: "#06100D",
      },
      secondary: {
        DEFAULT: "#344C64",
        light: "#577B8D",
      },
    },
    breakpoints: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Space Grotesk", "Noto Sans Thai Looped", "system-ui"],
      mono: ["Fira Code", "Noto Sans Thai Looped"],
    },
  },
  // 自定义规则和实用类
  rules: [
    // 在这里添加自定义规则
  ],
  shortcuts: [
    // 在这里定义快捷方式
  ],
});
