<script lang="ts" setup>
import type { BlogPost } from "@/types/blog";

const { path } = useRoute();

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne(),
);

if (error.value) navigateTo("/404");

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || "no-title available",
    description: articles.value?.description || "no-description available",
    alt: articles.value?.alt || "no alter data available",
    date: articles.value?.date || "not-date-available",
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  };
});

useHead({
  title: data.value.title || "",
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
