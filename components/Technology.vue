<template>
  <div>
    <!-- 技术标题 -->
    <h2 class="mb-3 text-lg font-bold text-gray-500 dark:text-gray-400">
      技术栈
    </h2>
    <!-- 技术栈网格布局 -->
    <div
      class="grid grid-cols-1 gap-5 text-gray-800 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
    >
      <TechnologyGridItems :technology-data="languageList" title="编程语言" />
      <TechnologyGridItems :technology-data="frameworkList" title="框架" />
      <TechnologyGridItems
        :technology-data="softwareList"
        title="软件 / 服务"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from "~/types/FrameworkListInterface";

// 编程语言列表
const languageList: FrameworkListInterface[] = [
  {
    name: "Go",
    icon: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  },
  {
    name: "Java",
    icon: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  },
  {
    name: "PHP",
    icon: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
  },
  {
    name: "TypeScript",
    icon: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    name: "JavaScript",
    icon: "https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
  },
  {
    name: "Python",
    icon: "https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white",
  },
  {
    name: "NodeJs",
    icon: "https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white",
  },
];

// 框架列表
const frameworkList: FrameworkListInterface[] = [
  {
    name: "Gin",
    icon: "https://img.shields.io/badge/gin-%23FF69B4.svg?style=for-the-badge&logo=go&logoColor=white",
  },
  {
    name: "VueJs",
    icon: "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
  },
  {
    name: "Nuxt",
    icon: "https://img.shields.io/badge/nuxt-%2300DC82.svg?style=for-the-badge&logo=nuxtdotjs&logoColor=white",
  },
  {
    name: "Spring Boot",
    icon: "https://img.shields.io/badge/spring%20boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white",
  },
  {
    name: "Express",
    icon: "https://img.shields.io/badge/express-%23404D59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  },
  {
    name: "ThinkPHP",
    icon: "https://img.shields.io/badge/thinkphp-%2300f.svg?style=for-the-badge&logo=php&logoColor=white",
  },
];

// 软件/服务列表
const softwareList: FrameworkListInterface[] = [
  {
    name: "JetBrains",
    icon: "https://img.shields.io/badge/jetbrains-%23000000.svg?style=for-the-badge&logo=jetbrains&logoColor=white",
  },
  {
    name: "GitHub",
    icon: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
  },
  {
    name: "Git",
    icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  },
  {
    name: "Docker",
    icon: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  },
  {
    name: "Postman",
    icon: "https://img.shields.io/badge/postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white",
  },
  {
    name: "Cloudflare",
    icon: "https://img.shields.io/badge/Cloudflare-F38020.svg?style=for-the-badge&logo=Cloudflare&logoColor=white",
  },
];
</script>
