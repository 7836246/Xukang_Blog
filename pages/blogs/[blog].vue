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
    image: articles.value?.image || "/not-found.jpg",
    alt: articles.value?.alt || "no alter data available",
    ogImage: articles.value?.ogImage || "/not-found.jpg",
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
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :image="data.image"
        :tags="data.tags"
        :title="data.title"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogToc />

    <div class="flex flex-row flex-wrap md:flex-nowrap mt-10 gap-2">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :label="true"
        :network="network"
        :styled="true"
        aria-label="Share with {network}"
        class="p-1"
      />
    </div>
  </div>
</template>
