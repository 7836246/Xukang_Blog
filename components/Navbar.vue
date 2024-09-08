<template>
  <div
    class="sticky top-0 z-10 border-b bg-white px-6 py-2 shadow-md dark:backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-white"
  >
    <header
      class="flex items-center justify-between xs:justify-between sm:justify-between max-w-[1300px] mx-auto"
    >
      <!-- Logo 链接 -->
      <ALink
        id="myName"
        aria-label="logo"
        class="inline-flex items-center gap-2 text-xl font-extrabold"
        href="/"
      >
        <a-icon icon="home" size="24" />
        <span>个人博客</span>
      </ALink>

      <!-- 导航 -->
      <nav class="flex gap-5">
        <div
          v-for="data in navItems"
          :key="data.label"
          class="hidden self-center md:inline-flex"
        >
          <ATooltip content="data.label" placement="top">
            <ALink
              :aria-label="`前往 ${data.label} 页面`"
              :href="data.to"
              class="inline-flex text-gray-600 transition duration-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
            >
              <AIcon :icon="data.icon" class="active:scale-90" size="24px" />
            </ALink>
          </ATooltip>
        </div>
        <ADivider class="hidden md:block" direction="vertical" />
        <!--        <navbar-theme-switch />-->
        <AButton
          aria-label="打开侧边栏"
          class="inline-flex md:hidden"
          icon="icon-menu"
          type="text"
          @click="isSidebarOpen = true"
        />
        <ADrawer v-model:visible="isSidebarOpen" title="导航菜单" width="300px">
          <div class="flex flex-col gap-3 p-4">
            <div class="flex flex-row justify-between items-center">
              <ALink
                id="myName"
                aria-label="logo"
                class="text-2xl font-extrabold inline-flex gap-1 items-center"
                href="/"
              >
                <AIcon icon="home" size="24" />
                <span>个人博客</span>
              </ALink>
              <AButton
                icon="close"
                shape="circle"
                @click="isSidebarOpen = false"
              />
            </div>
            <ADivider />
            <AMenu :items="navItems" @click="isSidebarOpen = false" />
          </div>
        </ADrawer>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
const isSidebarOpen = ref(false);
const navItems = [
  {
    label: "主页",
    to: "/",
    icon: "icon-home",
  },
  {
    label: "项目",
    to: "/Projects",
    icon: "icon-folder",
  },
  {
    label: "我的背包里有什么？",
    to: "/WhatIsInMyBag",
    icon: "icon-backpack",
  },
  {
    label: "书签",
    to: "/Bookmarks",
    icon: "icon-bookmark",
  },
  {
    label: "简历",
    to: "/Resume",
    icon: "icon-resume",
  },
  {
    label: "博客",
    to: "/blog",
    icon: "icon-notebook",
  },
];
</script>
