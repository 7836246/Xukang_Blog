<script lang="ts" setup>
import { Github } from "lucide-vue-next";
</script>

<template>
  <footer
    class="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-none border-t bg-gray-50 px-6 py-4 text-sm text-gray-600 dark:text-gray-400 dark:bg-neutral-900 dark:border-neutral-800"
  >
    <!-- 左侧文本内容 -->
    <div class="flex flex-col items-center sm:items-start">
      <span>© CopyRight 2024 XuKangR.Com Inc.All Rights Reserved. </span>
      <span
        >本网站内容遵循 MIT 开源协议 |
        <NuxtLink
          class="text-gray-600 hover:text-gray-800 no-underline dark:text-gray-400 dark:bg-neutral-900"
          target="_blank"
          to="https://beian.miit.gov.cn/"
          >赣ICP备2020014668号-4
        </NuxtLink>
      </span>
    </div>

    <!-- 右侧图标链接 -->
    <div class="flex flex-row gap-4">
      <a-tooltip content="访问源代码" placement="top">
        <a
          ref="noopener noreferrer"
          aria-label="访问 GitHub 仓库页面"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
          href="https://github.com/7836246/Xukang_Blog"
          target="_blank"
        >
          <Github
            class="text-gray-700 dark:text-gray-200"
            mode="svg"
            name="ph:github-logo-duotone"
            size="20px"
          />
        </a>
      </a-tooltip>
    </div>
  </footer>
  <a-back-top />
</template>

<style scoped>
/* 调整图标大小和样式 */
.icon {
  transition:
    transform 0.3s,
    background-color 0.3s;
}

a:hover .icon {
  transform: scale(1.1);
}
</style>
