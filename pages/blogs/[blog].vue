<script lang="ts" setup>
import type { BlogPost } from "@/types/blog";

const { path } = useRoute();

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne(),
);

if (error.value) navigateTo("/404");

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || "无标题",
    description: articles.value?.description || "无描述",
    alt: articles.value?.alt || "无替代文本",
    date: articles.value?.date || "无日期",
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  };
});

// 使用 useHead 设置 TDK（标题、描述和关键词）
useHead({
  title: `${data.value.title} - 徐康的主页`, // 设置文章标题并加上"徐康的主页"
  meta: [
    {
      name: "description",
      content: data.value.description || "无描述", // 使用文章描述
    },
    {
      name: "keywords",
      content: data.value.tags.join(", ") || "无关键字", // 使用文章标签作为关键字
    },
  ],
});
</script>

<template>
  <div>
    <article class="prose dark:prose-invert max-w-none">
      <!-- 使用指令来应用复制功能 -->
      <ContentRenderer v-copy-code :value="articles" />
    </article>
  </div>
</template>
