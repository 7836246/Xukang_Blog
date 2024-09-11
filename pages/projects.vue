<template>
  <div>
    <div class="flex flex-col gap-6">
      <PageHeader
        description="以下是我一些小项目和作品。这里列出的只是一些我觉得可以展示的项目。"
        title="项目"
      />
      <!-- 项目列表区域 -->
      <section
        class="flex flex-col gap-6 rounded-lg text-black dark:text-white"
      >
        <a-row :gutter="[24, 24]">
          <a-col
            v-for="work in workList"
            :key="work.name"
            :lg="8"
            :md="12"
            :span="24"
          >
            <!-- 确保 ProjectListItem 组件在夜间模式下也有适配 -->
            <ProjectListItem :work-data="work" />
          </a-col>
        </a-row>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type workListInterface from "~/types/workListInterface";

// 项目列表数据
const {
  data: workList,
  status,
  error,
  refresh,
  clear,
} = (await useAsyncData("project", () =>
  $fetch("/api/project"),
)) as unknown as workListInterface[];

// 使用 useSeoMeta 设置 SEO 元信息
useSeoMeta({
  title: "项目合集 - 徐康的个人主页",
  keywords: "项目,作品",
  description:
    "以下是我一些小项目和作品。这里列出的只是一些我觉得可以展示的项目。",
});
</script>

<style scoped>
/* 项目标题区域的上边距 */
.project-header {
  margin-top: 0; /* 将上边距设置为0，减少顶部空白 */
}

/* 控制整体页面布局的内外边距 */
.flex {
  margin-top: 0; /* 将外边距调整为合适的值，减少整体布局的空白 */
}
</style>
