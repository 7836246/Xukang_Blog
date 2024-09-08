<script lang="ts" setup></script>

<template>
  <footer
    class="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-none border bg-white px-8 py-4 text-gray-600 dark:text-gray-300 shadow-md sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"
  >
    <!-- 左侧文本内容 -->
    <div class="flex flex-col items-center text-sm sm:items-start">
      <span>© 2024 กรกมล ศรีอ่อน</span>
      <span>没有版权，因为这是开源的！</span>
    </div>

    <!-- 右侧图标链接 -->
    <div class="flex flex-row gap-5">
      <a-tooltip content="源代码" placement="top">
        <a
          ref="noopener noreferrer"
          aria-label="访问 GitHub 仓库页面"
          href="https://github.com/bKoZii/konkamon-portfolio-nuxt"
          target="_blank"
        >
          <div class="hover:text-black active:scale-95 dark:hover:text-white">
            <icon mode="svg" name="ph:github-logo-duotone" size="28px" />
          </div>
        </a>
      </a-tooltip>
    </div>
  </footer>
</template>
<style scoped></style>
