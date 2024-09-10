// plugins/copy-code.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("copy-code", {
    mounted(el: HTMLElement) {
      // 查找所有代码块
      const codeBlocks = el.querySelectorAll("pre");

      codeBlocks.forEach((block) => {
        // 创建复制按钮
        const copyButton = document.createElement("button");
        copyButton.className = "code-copy-btn";
        copyButton.textContent = "Copy";

        // 复制按钮点击事件
        copyButton.onclick = () => {
          const code = block.querySelector("code");
          if (code) {
            navigator.clipboard.writeText(code.innerText).then(() => {
              copyButton.textContent = "Copied!";
              setTimeout(() => (copyButton.textContent = "Copy"), 1500);
            });
          }
        };

        // 设置按钮位置并附加到代码块元素
        block.style.position = "relative";
        block.appendChild(copyButton);
      });
    },
  });
});
