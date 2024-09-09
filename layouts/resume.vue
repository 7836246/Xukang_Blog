<template>
  <main>
    <!-- 导航栏组件，打印时隐藏 -->
    <Navbar class="print:hidden" />
    <!-- 打印提示，打印时隐藏 -->
    <div
      class="bg-primary-600 dark:bg-primary-800 p-2 text-center text-sm text-white sm:text-base print:hidden"
    >
      <p>
        打印友好的标准简历，所有带有
        <code class="rounded bg-neutral-900 p-1 text-sm">print:hidden</code>
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
