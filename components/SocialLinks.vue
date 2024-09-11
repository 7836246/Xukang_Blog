<template>
  <div>
    <div>
      <h2 class="mb-6 text-lg font-bold text-gray-500 dark:text-gray-400">
        社交链接
      </h2>
    </div>
    <div class="flex flex-col gap-4 sm:gap-3 dark:text-white">
      <div v-for="data in socialList" :key="data.name">
        <div class="flex items-center justify-between space-x-2">
          <div v-if="data.link">
            <NuxtLink
              :to="data.link"
              class="link-styled flex flex-shrink-0 gap-2 text-base sm:text-lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {{ data.name }}
              <LucideExternalLink class="flex-shrink-0 w-4 h-4" />
            </NuxtLink>
          </div>
          <span
            class="flex-grow border-b border-dashed border-gray-300 dark:border-neutral-700"
          ></span>
          <span class="flex-shrink-0 text-gray-800 dark:text-white">
            <component :is="data.icon" class="w-7 h-7" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LucideExternalLink, LucideGithub, LucideMail } from "lucide-vue-next";

interface ItemWithIcon {
  name: string;
  icon: any;
  link?: string;
}

const socialList: ItemWithIcon[] = [
  {
    name: "GitHub",
    icon: LucideGithub,
    link: "https://github.com/7836246",
  },
  {
    name: "邮箱",
    icon: LucideMail,
    link: "mailto:go7836246@gmail.com",
  },
];
</script>

<style scoped>
/* 链接样式 */
.link-styled {
  color: #2563eb; /* 基础链接颜色 */
  text-decoration: none; /* 移除默认下划线 */
  position: relative; /* 为伪元素定位 */
  transition: color 0.3s ease; /* 平滑过渡 */
}

/* 悬停和焦点时的链接样式 */
.link-styled:hover,
.link-styled:focus {
  color: #1e40af; /* 悬停时的链接颜色 */
}

.link-styled::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background-color: #1e40af; /* 下划线颜色 */
  transform: scaleX(0); /* 初始缩放为 0 */
  transition: transform 0.3s ease; /* 添加平滑的动画效果 */
}

/* 悬停和焦点时的伪元素动画 */
.link-styled:hover::after,
.link-styled:focus::after {
  transform: scaleX(1); /* 悬停时下划线展开 */
}
</style>
