<template>
  <!-- 容器，设置最大宽度和居中 -->
  <div
    class="flex flex-col items-center lg:items-start text-center lg:text-left"
  >
    <!-- 个人介绍标题 -->
    <h1 class="text-3xl font-extrabold lg:text-4xl text-gradient">
      你好! 我是徐康 👋
    </h1>

    <!-- 简介描述 -->
    <p
      class="text-md lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
    >
      在这里我会分享各类技术栈所遇到的问题与解决方案，带你了解最新的技术栈以及实际开发中如何应用，并希望我的开发经历对你有所启发。
    </p>

    <!-- 按钮区域 -->
    <div class="flex gap-2 mt-2 justify-center lg:justify-start">
      <a-button
        :loading="loading"
        class="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-500 hover:to-blue-500 shadow-md hover:shadow-lg"
        size="large"
        type="primary"
        @click="downloadCV"
      >
        下载简历 - 中文
      </a-button>
      <a-button
        class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg"
        size="large"
        type="outline"
        @click="router.push('/resume')"
      >
        查看在线简历
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
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
/* 为标题增加渐变色 */
.text-gradient {
  background: linear-gradient(90deg, #3498db, #2ecc71);
  -webkit-background-clip: text;
  color: transparent;
}

/* 调整按钮的大小和边距 */
a-button {
  transition: all 0.3s ease;
}

a-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 118, 255, 0.39);
}
</style>
