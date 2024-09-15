<template>
  <article class="flex max-w-none flex-col gap-8 print:text-xs">
    <!-- 个人信息部分 -->
    <section
      class="flex flex-col lg:flex-row justify-between items-center py-3"
    >
      <!-- 左侧联系方式 -->
      <div class="text-sm text-center lg:text-left">
        <p>
          邮箱: <a href="mailto:go7836246@gmail.com<">go7836246@gmail.com</a>
        </p>
      </div>
      <!-- 中间名字 -->
      <div class="text-center text-4xl font-bold lg:text-5xl">
        徐康
        <span class="block text-lg">(Big)</span>
      </div>
      <!-- 右侧社交链接 -->
      <div class="text-sm text-center lg:text-right">
        <p>当前状态: 随时到岗</p>
      </div>
    </section>

    <!-- 专业技能部分 -->
    <section>
      <h2 class="text-lg font-bold border-b pb-2">专业技能</h2>
      <ul class="list-disc pl-5">
        <li>熟练使用 Golang, JavaScript, TypeScript 和 SQL 进行开发</li>
        <li>
          掌握 Vue3 和 Nuxt3 前端框架，熟悉 Naive UI 和 Tailwind CSS 等工具
        </li>
        <li>擅长 MySQL 和 Redis 数据库的设计与优化，熟悉 MongoDB</li>
        <li>熟练使用 Docker 容器化技术和 Git 版本控制</li>
        <li>具备微服务架构和消息队列（如 Kafka）的应用经验</li>
      </ul>
    </section>

    <!-- 工作经验部分 -->
    <section>
      <h2 class="text-lg font-bold border-b pb-2">工作经验</h2>
      <div class="mt-4">
        <h3 class="text-base font-semibold">Go开发工程师 - 开发部</h3>
        <p class="text-sm">
          安徽阜南县奇灵信息科技公司 | 2022年10月 - 2024年02月
        </p>
        <ul class="list-disc pl-5 mt-2">
          <li>负责文库系统的前端开发，优化用户体验和 SEO</li>
          <li>设计并优化 MySQL 数据库和 Redis 缓存策略，提高系统响应速度</li>
          <li>使用 Go 语言实现高性能后端服务，管理文档、分类、标签和权限</li>
        </ul>
      </div>
      <div class="mt-4">
        <h3 class="text-base font-semibold">Java工程师实习生 - 技术部</h3>
        <p class="text-sm">
          广州云中漫步网络有限公司 | 2021年12月 - 2022年05月
        </p>
        <ul class="list-disc pl-5 mt-2">
          <li>设计和实现 RESTful API 接口，支持前端开发</li>
          <li>优化数据库架构和缓存策略，数据读取速度提升 50%</li>
          <li>参与 CI/CD 流程设计和实现，确保项目的持续交付和质量保证</li>
        </ul>
      </div>
    </section>

    <!-- 项目经验部分 -->
    <section>
      <h2 class="text-lg font-bold border-b pb-2">项目经验</h2>
      <div class="mt-4">
        <h3 class="text-base font-semibold">个人博客系统开发</h3>
        <p class="text-sm">2024年01月 - 2024年02月</p>
        <ul class="list-disc pl-5 mt-2">
          <li>使用 Golang 和 Nuxt3 开发博客平台，实现前后端分离架构</li>
          <li>实现 JWT 和 Casbin 的权限管理系统，保障数据安全</li>
          <li>采用 SSR 和静态文件缓存策略，优化 SEO 和页面加载速度</li>
        </ul>
      </div>
    </section>

    <!-- 教育经历部分 -->
    <section>
      <h2 class="text-lg font-bold border-b pb-2">教育背景</h2>
      <p class="text-sm mt-2">
        江西科技学院 - 软件技术专业 (2019年09月 - 2022年07月)
      </p>
    </section>
  </article>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "resume",
});

useSeoMeta({
  title: "简历 - 徐康的个人主页",
  keywords: "简历, 徐康, 个人主页",
  description: "徐康的个人简历，包含专业技能、工作经验和项目经验等详细信息",
});
</script>
