<template>
  <div class="flex flex-col w-full text-gray-800 dark:text-gray-200">
    <!-- 标题 -->
    <h3 class="mb-2 font-bold">{{ title }}</h3>
    <!-- 技术列表 -->
    <div class="flex flex-row flex-wrap justify-center gap-3 sm:justify-start">
      <div v-for="item in technologyData" :key="item.name">
        <!-- 图像显示技术栈 -->
        <img :alt="item.name" :src="item.icon" class="w-auto rounded" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from "../../types/FrameworkListInterface";

defineProps({
  technologyData: {
    type: Array as () => FrameworkListInterface[],
    required: true,
  },
  title: String,
});
</script>

<style scoped></style>
