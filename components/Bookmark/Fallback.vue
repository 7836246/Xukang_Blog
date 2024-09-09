<template>
  <div>
    <!-- 使用 Arco UI 的布局和骨架屏组件 -->
    <div
      class="flex min-w-0 flex-col items-start rounded-lg border p-2 sm:flex-row sm:items-center sm:gap-3 dark:border-neutral-800"
    >
      <!-- 图标部分 -->
      <span
        class="relative hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-800 sm:inline-flex dark:text-gray-400"
      >
        <!--        <icon name="ph:globe-duotone" class="text-2xl" />-->
      </span>
      <!-- 骨架屏部分 -->
      <div class="flex flex-col flex-1 gap-2">
        <a-skeleton animation class="w-40 h-5 mb-2" />
        <a-skeleton animation class="w-72 h-3" />
      </div>
      <!-- 间隔部分 -->
      <span class="flex-1"></span>
      <!-- 小骨架屏展示域名部分 -->
      <span class="text-sm text-gray-800 sm:block dark:text-gray-400">
        <a-skeleton animation class="w-20 h-3" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "uno.css";
</script>
