<template>
  <article class="flex max-w-none flex-col gap-8 print:text-xs">
    <!-- 个人信息部分 -->
    <section
      class="flex flex-col flex-nowrap items-center justify-between py-3 xs:flex-col lg:flex-row print:flex-row print:p-0"
    >
      <!-- 左侧联系方式 -->
      <div
        class="prose flex flex-1 flex-col text-center text-sm dark:prose-invert sm:text-left print:text-left print:text-xs"
      >
        <a href="mailto:konkamon.work@gmail.com">konkamon.work@gmail.com</a>
        <span>泰国那空是贪玛叻府</span>
      </div>
      <!-- 中间名字 -->
      <div
        class="order-first flex-none p-4 text-center text-4xl font-bold sm:order-none sm:text-2xl md:text-3xl lg:text-6xl print:order-none print:pt-0 print:text-3xl"
      >
        徐康
        <span class="-mt-1 block text-base lg:text-lg">( Big )</span>
      </div>
      <!-- 右侧社交链接 -->
      <div
        class="prose flex flex-1 flex-col text-center text-sm dark:prose-invert sm:py-4 sm:text-right print:text-right print:text-xs"
      >
        <a
          href="https://github.com/bKoZii"
          rel="noopener noreferrer"
          target="_blank"
          >github.com/bKoZii</a
        >
        <a href="https://konkamon-nuxt.web.app" target="_blank"
          >konkamon-nuxt.web.app</a
        >
      </div>
    </section>
    <!-- 技术栈部分 -->
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          技术栈 / 编程语言
        </h2>
      </div>
      <div>
        <ul
          v-for="(item, index) in resumeData"
          :key="index"
          class="ml-5 list-inside list-disc text-sm sm:text-base print:text-xs"
        >
          <li v-for="(data, idx) in item.technology" :key="idx">
            <span class="inline-block w-28 pr-1 font-semibold"
              >{{ data.heading }}:</span
            >
            {{ data.detail }}
          </li>
        </ul>
      </div>
    </section>
    <!-- 教育经历部分 -->
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          教育背景
        </h2>
      </div>
      <div>
        <ul
          v-for="(item, index) in resumeData"
          :key="index"
          class="ml-5 list-inside list-disc sm:text-base print:text-xs"
        >
          <li v-for="(data, idx) in item.education" :key="idx">
            <span class="pr-1 font-semibold">{{ data.heading }}，</span>
            {{ data.detail }}
          </li>
        </ul>
      </div>
    </section>
    <!-- 工作经验部分 -->
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          工作经验
        </h2>
      </div>
      <section>
        <div
          class="flex flex-col justify-between text-sm font-bold sm:flex-row sm:text-base print:text-xs"
        >
          <span>实习生 - 前端开发者，测试员</span>
          <span>Siam IT Networking (Thailand) Co., Ltd.</span>
          <span>2024年5月7日 - 2024年6月21日</span>
        </div>
        <div>
          <ul class="ml-5 list-inside list-disc">
            <li>测试管理系统、用户/骑手/商家应用程序</li>
            <li>根据 Dribble 设计创建仪表板网页。</li>
          </ul>
        </div>
      </section>
    </section>
    <!-- 项目部分 -->
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          项目
        </h2>
      </div>
      <div>
        <ul
          v-for="(item, index) in resumeData"
          :key="index"
          class="ml-5 list-inside list-disc sm:text-base print:text-xs"
        >
          <li v-for="(data, idx) in item.project" :key="idx">
            <span class="pr-1 font-semibold">{{ data.title }}，</span>
            {{ data.detail }}
            <a :href="data.url" rel="noopener noreferrer" target="_blank">
              <span class="font-semibold underline">{{
                removeHttps(data.url)
              }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
interface Resume {
  technology: headingAndDetail[];
  education: headingAndDetail[];
  project: projects[];
}

interface headingAndDetail {
  heading: string;
  detail: string;
}

interface projects {
  title: string;
  detail: string;
  url: string;
}

definePageMeta({
  layout: "resume",
});

const resumeData: Resume[] = [
  {
    education: [
      {
        heading: "信息技术",
        detail: "那空是贪玛叻职业学院，2018-2020 (GPA 3.75)",
      },
      {
        heading: "数字商务技术",
        detail: "那空是贪玛叻职业学院，2021-2023 (GPA 3.38)",
      },
      {
        heading: "信息技术",
        detail: "斯里维加亚皇家理工大学，2023-至今 (GPA 3.85)",
      },
    ],
    project: [
      {
        title: "从 Mock Up 创建的仪表板",
        detail: "根据 Dribble 设计创建仪表板网页",
        url: "https://vue-quasar-dashboard.web.app",
      },
      {
        title: "个人作品网站",
        detail: "我的个人作品网站，使用 Nuxt 和 Nuxt UI 构建",
        url: "https://konkamon-nuxt.web.app",
      },
    ],
    technology: [
      {
        heading: "编程语言",
        detail: "JavaScript, TypeScript, Python, HTML, CSS",
      },
      {
        heading: "框架",
        detail: "Vue, Nuxt, Angular, TailwindCSS, Bootstrap, Ionic",
      },
      { heading: "工具 / 其他", detail: "VSCode, Git, Linux, Firebase" },
    ],
  },
];

useSeoMeta({
  title: "简历",
  ogTitle: "%s - 徐康",
  description: "徐康的个人简历",
  ogDescription: "徐康的个人简历",
  ogImage: "/ogImage-resume.webp",
  ogUrl: "https://konkamon.vercel.app/Resume",
});

function removeHttps(url: string) {
  return url.replace("https://", "");
}
</script>
