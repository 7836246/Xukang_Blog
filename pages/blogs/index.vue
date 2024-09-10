<script lang="ts" setup>
definePageMeta({});
const { data } = await useAsyncData("home", () =>
  queryContent("/blogs").sort({ _id: -1 }).find(),
);

const elementPerPage = ref(5);
const pageNumber = ref(1);
const searchTest = ref("");

// 格式化日期的函数
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

const formattedData = computed(() => {
  return (
    data.value?.map((articles) => {
      return {
        path: articles._path,
        title: articles.title || "no-title available",
        description: articles.description || "no-description available",
        alt: articles.alt || "/not-found.jpg",
        date: articles.date ? formatDate(articles.date) : "not-date-available", // 使用格式化的日期
        tags: articles.tags || [],
        published: articles.published || false,
      };
    }) || []
  );
});

const searchData = computed(() => {
  return (
    formattedData.value.filter((data) => {
      const lowerTitle = data.title.toLocaleLowerCase();
      if (lowerTitle.includes(searchTest.value.toLowerCase())) return true;
      else return false;
    }) || []
  );
});

const paginatedData = computed(() => {
  return (
    searchData.value.filter((data, idx) => {
      const startInd = (pageNumber.value - 1) * elementPerPage.value;
      const endInd = pageNumber.value * elementPerPage.value - 1;
      return idx >= startInd && idx <= endInd;
    }) || []
  );
});

function onPageChange(page: number) {
  pageNumber.value = page;
}

// 导航到指定文章路径
function goToPost(path: string) {
  navigateTo(path);
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0;
  return Math.ceil(ttlContent / elementPerPage.value);
});
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 py-8">
    <!-- 搜索框 -->
    <div class="px-6 mb-6">
      <AInput
        v-model="searchTest"
        class="block w-full bg-gray-100 dark:bg-slate-800 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200 rounded-md border-none shadow-sm focus:(border-indigo-500 ring-2 ring-indigo-200)"
        clearable
        placeholder="Search"
        size="large"
        type="text"
      />
    </div>

    <!-- 文章卡片列表 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 px-4">
      <template v-for="post in paginatedData" :key="post.title">
        <a :href="post.path" class="no-underline">
          <a-card
            class="transition-all duration-300 transform hover:scale-105 shadow-md"
            hoverable
          >
            <a-card-meta
              :description="post.description"
              :title="post.title"
              class="text-gray-800 dark:text-gray-200"
            />
            <div class="flex justify-between items-center mt-4">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                post.date
              }}</span>
              <a-button class="text-sky-700 dark:text-sky-400" type="text"
                >Read More
              </a-button>
            </div>
          </a-card>
        </a>
      </template>

      <!-- 没有文章时显示的卡片 -->
      <a-card
        v-if="paginatedData.length <= 0"
        class="text-center py-16 text-gray-500"
        hoverable
      >
        <p class="text-lg">No Post Found</p>
      </a-card>
    </div>

    <!-- 分页 -->
    <div class="flex justify-center items-center mt-6">
      <a-pagination
        :current="pageNumber"
        :page-size="elementPerPage"
        :total="searchData.length"
        simple
        @change="onPageChange"
      />
    </div>
  </main>
</template>
