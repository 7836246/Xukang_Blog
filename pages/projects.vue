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
const workList: workListInterface[] = [
  {
    name: "Ionic + Angular - Firebase CRUD ",
    description: "Ionic 项目，作为云应用开发课程的作业。",
    link: "https://github.com/bKoZii/cloud-konkamon-ionic-angular",
  },
  {
    name: "Ionic + Vue - Firebase CRUD",
    description: "Ionic 项目，作为云应用开发课程的作业。",
    link: "https://github.com/bKoZii/cloud-konkamon-ionic-vue",
  },
  {
    name: "从 Mock Up 创建的仪表板",
    description: "练习使用 Vue 和 Quasar 从设计稿中创建仪表板。",
  },
  {
    name: "Angular 网站",
    description: "Angular + Bootstrap 项目，作为云应用开发课程的作业。",
    link: "https://github.com/bKoZii/cloud-konkamon-bootstrap",
  },
  {
    name: "Vue + Vuetify - Firestore CRUD",
    description: "学习使用 Vuetify 创建 CRUD 应用程序。",
    link: "https://github.com/bKoZii/vuetify-firestore-crud",
  },
];

// 使用 useSeoMeta 设置 SEO 元信息
useSeoMeta({
  title: "项目合集",
  ogTitle: "%s - 徐康",
  description:
    "以下是我一些小项目和作品。这里列出的只是一些我觉得可以展示的项目。",
  ogDescription:
    "以下是我一些小项目和作品。这里列出的只是一些我觉得可以展示的项目。",
  ogImage: "/ogImage-projects.webp",
  ogUrl: "https://konkamon.vercel.app/Projects",
});
</script>

<style scoped>
/* 自定义项目标题区域的上边距 */
.project-header {
  margin-top: 0; /* 将上边距设置为0，减少顶部空白 */
}

/* 控制整体页面布局的内外边距 */
.flex {
  margin-top: 0; /* 将外边距调整为合适的值，减少整体布局的空白 */
}
</style>
