import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        a: {
          "text-decoration": "none",
          color: "#1e88e5",
        },
        "a:hover": {
          "text-decoration": "underline",
        },
        pre: {
          "background-color": "#2e3440", // 更深的背景色
          "border-radius": "8px",
          padding: "1.2rem",
          "overflow-x": "auto",
          "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative", // 为了放置语言标签
          "margin-bottom": "1.5rem",
        },
        "pre code": {
          display: "block",
          background: "none",
          padding: "0",
          color: "#f8f8f2",
          "font-family": '"Fira Code", monospace',
          "font-size": "0.875rem",
        },
        ".dark pre": {
          "background-color": "#282c34",
        },
        ".dark pre code": {
          color: "#abb2bf",
        },
        ".code-copy-btn": {
          position: "absolute",
          top: "8px",
          right: "8px",
          "background-color": "#44475a",
          border: "none",
          color: "#f8f8f2",
          padding: "4px 8px",
          "border-radius": "4px",
          cursor: "pointer",
          "font-size": "0.75rem",
          opacity: "0.7",
        },
        ".code-copy-btn:hover": {
          opacity: "1",
        },
        // 语言标识的样式
        "pre::before": {
          content: "attr(data-language)", // 使用 data-language 属性显示语言
          position: "absolute",
          top: "8px",
          left: "16px",
          "background-color": "#44475a",
          color: "#f8f8f2",
          "font-size": "0.75rem",
          padding: "2px 8px",
          "border-radius": "4px",
          "text-transform": "uppercase", // 转为大写
        },
      },
    }),
  ],
});
