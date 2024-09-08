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
    <!--    <Navbar />-->

    <!-- 主容器 -->
    <div class="max-w-[1000px] mx-auto p-0 sm:p-3 flex flex-col gap-2 sm:gap-5">
      <!-- 主体内容 -->
      <main
        class="rounded-none border bg-white p-3 shadow-md xs:p-5 sm:rounded-lg md:p-5 lg:p-8 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"
      >
        <slot />
      </main>

      <!-- 页脚 -->
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
