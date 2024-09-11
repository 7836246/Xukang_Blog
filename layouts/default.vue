<template>
  <div>
    <!-- 背景网格样式 -->
    <div
      class="fixed inset-0 -z-10 h-full w-full bg-slate-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px] dark:bg-black"
    ></div>

    <!-- 背景渐变效果 -->
    <div
      class="fixed inset-0 -z-[9] mx-28 hidden h-screen items-center justify-center lg:flex"
    >
      <div
        class="from-primary via-background h-[500px] w-full rounded-full bg-gradient-to-r to-blue-500 opacity-20 blur-[150px] dark:to-blue-600 dark:opacity-15"
      ></div>
    </div>

    <!-- 导航栏 -->
    <Navbar />

    <!-- 主容器 -->
    <div class="max-w-[1000px] mx-auto p-0 sm:p-3 flex flex-col gap-2 sm:gap-5">
      <!-- 主体内容 -->
      <main
        class="rounded-none border bg-white text-gray-800 shadow-md p-5 pt-0 sm:rounded-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:shadow-none"
      >
        <slot />
      </main>
      <!-- 页脚 -->
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
/* 适配夜间模式的阴影和边框样式 */
.main-container {
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.dark .main-container {
  background-color: #1e293b; /* 更深的背景色，以确保可读性 */
  border-color: #334155; /* 深色边框 */
  color: #e5e7eb; /* 更亮的文本颜色 */
}

.shadow-md {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.dark .shadow-none {
  box-shadow: none;
}
</style>
