<template>
  <!-- 外层链接，打开新标签 -->
  <a :href="webItem.url" rel="noopener noreferrer" target="_blank">
    <!-- Arco UI 的卡片组件 -->
    <a-card
      class="transition-transform hover:scale-102 p-0 border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
      hoverable
    >
      <a-card-meta
        class="flex min-w-0 flex-col items-start sm:flex-row sm:items-center sm:gap-3 p-2"
      >
        <!-- 图标部分 -->
        <template #avatar>
          <span
            class="relative hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-800 sm:inline-flex dark:text-gray-400"
          >
            <!--            <icon class="text-2xl" name="ph:globe-duotone" />-->
          </span>
        </template>
        <!-- 名称和描述部分 -->
        <template #title>
          <p class="text-base font-semibold text-black dark:text-white m-0">
            {{ webItem.name }}
          </p>
        </template>
        <template #description>
          <p class="text-xs text-gray-500 sm:text-sm dark:text-gray-400 m-0">
            {{ webItem.description }}
          </p>
        </template>
      </a-card-meta>
      <!-- 域名显示部分 -->
      <div
        class="text-sm text-gray-800 sm:block dark:text-gray-400 mt-2 text-right"
      >
        {{ useGetHostname(webItem.url) }}
      </div>
    </a-card>
  </a>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from "~/types/BookmarkItemsInterface";

defineProps({
  webItem: {
    type: Object as () => BookmarkItemsInterface,
    required: true,
  },
});
</script>
