<template>
  <main>
    <!-- 导航栏组件，打印时隐藏 -->
    <Navbar class="print:hidden" />
    <!-- 打印提示，打印时隐藏 -->
    <div
      class="bg-green-600 dark:bg-green-800 p-2 text-center text-sm text-gray-100 sm:text-base print:hidden"
    >
      <p>
        打印友好的标准简历，所有带有
        <code class="rounded bg-gray-800 p-1 text-sm text-gray-100"
          >print:hidden</code
        >
        类的 HTML 标签在打印时将被隐藏。按 Ctrl+P 进行打印。
      </p>
    </div>
    <!-- 主内容区域 -->
    <div
      class="container mx-auto max-w-screen-xl px-3 sm:px-0 xl:mx-auto print:px-0"
    >
      <slot />
    </div>
  </main>
</template>

<style scoped>
/* styles.css */
@media print {
  .print\:hidden {
    display: none !important; /* 确保 print:hidden 元素在打印时隐藏 */
  }

  .bg-primary-600 {
    background-color: #1e40af !important; /* 替换为你的 primary-600 色值 */
  }

  .dark .bg-primary-800 {
    background-color: #1e3a8a !important; /* 替换为你的 primary-800 色值 */
  }

  .text-white {
    color: #ffffff !important; /* 确保文本在打印时为白色 */
  }

  .bg-neutral-900 {
    background-color: #111827 !important; /* 确保中性色背景正常显示 */
  }
}
</style>
