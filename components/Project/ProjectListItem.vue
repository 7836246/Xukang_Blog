<template>
  <div>
    <a-card
      :bordered="false"
      class="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 card-bg"
    >
      <template #title>
        <!-- 链接的项目标题 -->
        <NuxtLink
          v-if="workData.link"
          :href="workData.link"
          class="text-lg font-bold flex items-center gap-2 no-underline hover:text-blue-500 transition-colors duration-300 dark:text-white"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ workData.name }}
        </NuxtLink>
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
      <!-- GitHub Star 数量 -->
      <div
        class="mt-3 text-gray-500 dark:text-gray-400 text-sm flex items-center"
      >
        <span class="mr-2">⭐️ {{ workData.stars }} Stars</span>
      </div>
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
.card-bg {
  background: linear-gradient(
    135deg,
    #ffffff,
    #f7f7f7
  ); /* 浅色模式的卡片渐变背景色 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.dark .card-bg {
  background: linear-gradient(
    135deg,
    #2a2a2a,
    #1f1f1f
  ) !important; /* 深色模式的卡片渐变背景色 */
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05); /* 深色模式下更轻的阴影 */
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

.dark a:hover {
  color: #58a6ff; /* 夜间模式下鼠标移入时的链接颜色 */
}

/* 鼠标悬停效果 */
.card-bg:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* 加深阴影 */
  transform: translateY(-5px); /* 卡片上移效果 */
  transition: all 0.3s ease; /* 过渡效果 */
}

.dark .card-bg:hover {
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1); /* 深色模式下的悬停阴影 */
  transform: translateY(-5px);
  transition: all 0.3s ease;
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

/* Stars 数量的显示样式 */
.star-count {
  color: #f39c12; /* 星星的颜色 */
  font-weight: bold;
  display: flex;
  align-items: center;
}
</style>
