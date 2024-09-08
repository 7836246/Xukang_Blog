<template>
  <a-row
    align="middle"
    class="gap-5 pt-4 mx-auto max-w-screen-lg"
    justify="center"
  >
    <!-- 介绍和按钮区域 -->
    <a-col
      :span="24"
      class="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left"
      lg="12"
    >
      <h1 class="text-3xl font-bold sm:text-4xl lg:text-5xl">徐康</h1>
      <p class="text-lg lg:text-xl">
        我是一位经验丰富的全栈开发者，专注于使用 <strong>Golang</strong> 和
        <strong>Nuxt3</strong> 构建高效的后端服务和现代化的 Web
        应用。擅长开发高性能的 RESTful
        API、微服务架构以及响应式用户界面，致力于简化复杂问题，提升开发效率和用户体验。
      </p>
      <div class="flex gap-3 mt-4 justify-center lg:justify-start">
        <a-button
          :loading="loading"
          size="large"
          type="primary"
          @click="downloadCV"
        >
          下载简历 - 中文
        </a-button>
        <a-button href="/Resume" size="large" type="outline">
          查看在线简历
        </a-button>
      </div>
    </a-col>

    <!-- 图片或插图区域 -->
    <a-col :span="24" class="flex justify-center lg:justify-end" lg="12">
      <!--      <img-->
      <!--          src="your-image-url-here.jpg"-->
      <!--          alt="个人照片"-->
      <!--          class="rounded-lg shadow-lg max-w-full lg:max-w-sm"-->
      <!--      />-->
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Button as AButton,
  Col as ACol,
  Row as ARow,
} from "@arco-design/web-vue";

const loading = ref(false);

const downloadCV = () => {
  loading.value = true;
  // 模拟下载逻辑
  setTimeout(() => {
    loading.value = false;
    const link = document.createElement("a");
    link.href = "path-to-your-cv-file.pdf"; // 替换为实际的简历文件路径
    link.download = "Xu_Kang_CV.pdf";
    link.click();
  }, 2000);
};
</script>

<style scoped>
/* 样式调整以确保布局美观 */
</style>
