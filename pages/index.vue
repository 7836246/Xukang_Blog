<script lang="ts" setup>
// 设置 SEO 元数据
useSeoMeta({
  title: "首页 - 徐康的主页",
  keywords: "徐康, 个人主页, 技术栈, 项目经验, 最新动态",
  description:
    "欢迎来到徐康的个人主页，这里展示了他的技术栈、项目经验和最新动态。",
});
</script>

<template>
  <main>
    <div class="flex flex-col flex-nowrap gap-10">
      <Hero />
      <Technology />
    </div>
  </main>
</template>

<style scoped></style>
