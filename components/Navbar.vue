<template>
  <div
    class="sticky top-0 z-10 border-b bg-white px-6 py-2 shadow-md dark:bg-neutral-950/80 dark:border-neutral-800 dark:backdrop-blur-lg dark:text-white"
  >
    <header
      class="flex items-center justify-between max-w-full lg:max-w-1300px mx-auto px-4 overflow-hidden"
    >
      <NuxtLink
        aria-label="主页"
        class="transition-colors duration-200 inline-flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-blue-500 dark:text-white no-underline"
        to="/"
      >
        徐康的个人主页
      </NuxtLink>

      <!-- 移动端汉堡菜单按钮 -->
      <button
        aria-label="打开菜单"
        class="lg:hidden text-gray-800 dark:text-white focus:outline-none"
        @click="isSidebarOpen = !isSidebarOpen"
      >
        <LucideMenu class="icon-size" />
      </button>

      <!-- 使用 lg:flex 来在大屏幕显示，hidden 在小屏幕隐藏 -->
      <nav class="hidden lg:flex gap-5 items-center">
        <div
          v-for="data in navItems"
          :key="data.label"
          class="flex items-center"
        >
          <a-tooltip :arrow="true" :content="data.label">
            <NuxtLink
              :aria-label="`前往${data.label}页面`"
              :to="data.to"
              active-class="active-link"
              class="inline-flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200 no-underline"
            >
              <component :is="data.icon" class="icon-size fixed-icon" />
            </NuxtLink>
          </a-tooltip>
        </div>
        <div class="flex items-center">
          <NavbarThemeSwitch />
        </div>
      </nav>
    </header>

    <!-- 移动端侧边栏导航 -->
    <a-drawer
      v-model:visible="isSidebarOpen"
      class="lg:hidden"
      placement="right"
      width="250px"
    >
      <template #title>
        <span>导航</span>
      </template>
      <template #default>
        <nav class="flex flex-col gap-4 mt-4">
          <div
            v-for="data in navItems"
            :key="data.label"
            class="flex items-center"
          >
            <NuxtLink
              :aria-label="`前往${data.label}页面`"
              :to="data.to"
              active-class="active-link"
              class="inline-flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200 no-underline"
              @click="isSidebarOpen = false"
            >
              <component :is="data.icon" class="icon-size fixed-icon mr-2" />
              <span>{{ data.label }}</span>
            </NuxtLink>
          </div>
        </nav>
      </template>
    </a-drawer>
  </div>
</template>

<script lang="ts" setup>
// 导入需要的图标
import {
  LucideBookmark,
  LucideBookOpen,
  LucideFileText,
  LucideFolderOpen,
  LucideHome,
  LucideMenu,
} from "lucide-vue-next";
import { ref } from "vue";

const isSidebarOpen = ref(false);
const navItems = [
  {
    label: "主页",
    to: "/",
    icon: LucideHome,
  },
  {
    label: "项目",
    to: "/projects",
    icon: LucideFolderOpen,
  },
  {
    label: "书签",
    to: "/bookmarks",
    icon: LucideBookmark,
  },
  {
    label: "简历",
    to: "/resume",
    icon: LucideFileText,
  },
  {
    label: "博客",
    to: "/blogs",
    icon: LucideBookOpen,
  },
];
</script>

<style scoped>
/* 固定图标的大小 */
.icon-size {
  width: 24px;
  height: 24px;
}

/* 防止图标在加载时闪烁 */
.fixed-icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

/* 选中状态的高亮样式 */
.active-link .icon-size {
  color: #0883ee;
  font-weight: bold;
}

/* 美化链接和悬停效果 */
a.no-underline {
  text-decoration: none; /* 移除下划线 */
}

a.no-underline:hover {
  text-decoration: none; /* 保持无下划线状态 */
}
</style>
