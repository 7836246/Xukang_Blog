<template>
  <div class="inline-flex">
    <ClientOnly>
      <!-- 使用 Arco UI 的 Tooltip，根据主题动态切换提示内容 -->
      <a-tooltip :content="tooltipContent">
        <!-- 使用 Arco UI 的 Button -->
        <a-button
          class="transition-transform transform hover:scale-110 active:scale-95 dark:bg-neutral-800 dark:text-white"
          shape="circle"
          size="large"
          @click="switchColorMode"
        >
          <!-- 使用 Lucide 图标 -->
          <component :is="iconName" class="icon-style" />
        </a-button>
      </a-tooltip>

      <template #fallback>
        <!-- 使用 Arco UI 的 Skeleton -->
        <a-skeleton shape="circle" size="24px" />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
// 导入 Lucide 图标
import { LucideMonitor, LucideMoon, LucideSun } from "lucide-vue-next";

const colorMode = useColorMode();

const ColorModeList = ["light", "dark", "system"] as const;
type ColorMode = (typeof ColorModeList)[number];

// 切换主题模式的函数
const switchColorMode = () => {
  const currentIndex = ColorModeList.indexOf(colorMode.preference as ColorMode);
  const nextIndex = (currentIndex + 1) % ColorModeList.length;
  colorMode.preference = ColorModeList[nextIndex];
};

// 计算当前主题对应的图标
const iconName = computed(() => {
  const iconNameMap: Record<ColorMode, any> = {
    system: LucideMonitor,
    light: LucideSun,
    dark: LucideMoon,
  };
  return iconNameMap[colorMode.preference as ColorMode];
});

// 计算提示内容，根据当前主题动态切换
const tooltipContent = computed(() => {
  if (colorMode.preference === "system") {
    return "切换主题";
  } else if (colorMode.preference === "light") {
    return "夜间模式";
  } else {
    return "日间模式";
  }
});
</script>

<style scoped>
/* 确保图标大小适合按钮 */
.icon-style {
  font-size: 24px;
  transition: color 0.3s;
}
</style>
