<template>
  <div>
    <!-- 页头组件 -->
    <PageHeader
      description="收集了有关 IT、Linux、教程和其他有趣网站的链接。"
      title="书签"
    />
    <!-- 书签列表部分 -->
    <section class="mt-6 flex flex-col flex-nowrap gap-3">
      <!--       动态渲染书签项 -->
      <div v-for="data in bookmarkItems" :key="data.name">
        <BookmarkItem :webItem="data" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// 定义一个响应式变量来存储书签数据
const { data: bookmarkItems } = await useFetch("/api/bookmarks");

// 设置 SEO 元数据
useSeoMeta({
  title: "书签 - 徐康的个人主页",
  keywords: "书签,bookmark",
  description: "收集了有关 IT、Linux、教程和其他有趣网站的链接。",
});
</script>
