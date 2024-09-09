<template>
  <div>
    <a-card
      :bordered="false"
      class="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <template #title>
        <!-- 链接的项目标题 -->
        <a
          v-if="workData.link"
          :href="workData.link"
          class="text-lg font-bold flex items-center gap-2 no-underline hover:text-blue-500 transition-colors duration-300"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ workData.name }}
        </a>
        <!-- 非链接的项目标题 -->
        <p v-else class="text-lg font-bold m-0 text-gray-800 dark:text-white">
          {{ workData.name }}
        </p>
      </template>
      <!-- 分隔线 -->
      <div
        class="border-b border-dashed border-gray-300 dark:border-gray-700 my-3"
      ></div>
      <!-- 项目描述，限制为两行 -->
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-0 description">
        {{ workData.description }}
      </p>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import type workListInterface from "../../types/workListInterface";

// 接收工作数据作为属性
defineProps<{
  workData: workListInterface;
}>();
</script>

<style scoped>
/* 卡片样式 */
a-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff, #f7f7f7); /* 卡片渐变背景色 */
  transition: all 0.3s ease;
}

/* 链接样式 */
a {
  color: inherit; /* 默认链接颜色 */
  text-decoration: none; /* 去掉下划线 */
  transition: color 0.3s ease; /* 平滑过渡 */
}

a:hover {
  color: #3498db; /* 鼠标移入时链接变成蓝色 */
}

/* 鼠标悬停效果 */
a-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* 加深阴影 */
  transform: translateY(-5px); /* 卡片上移效果 */
  transition: all 0.3s ease; /* 过渡效果 */
}

/* 描述文本，限制为两行 */
.description {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制为两行 */
  -webkit-box-orient: vertical;
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  max-height: 3em; /* 两行的最大高度 */
}
</style>
