<template>
  <div v-cloak class="inline-flex">
    <!-- 如果是客户端，渲染实际的按钮和图标 -->
    <template v-if="isClient">
      <a-tooltip :content="tooltipContent">
        <a-button
          :title="tooltipContent"
          class="transition-transform transform hover:scale-110 active:scale-95 dark:bg-neutral-800 dark:text-white"
          shape="circle"
          size="large"
          @click="switchColorMode"
        >
          <!-- 使用 Lucide 图标 -->
          <component :is="iconName" class="icon-style" />
        </a-button>
      </a-tooltip>
    </template>

    <!-- 占位符按钮，v-cloak 生效时显示 -->
    <template v-else>
      <a-button
        class="transition-transform transform hover:scale-110 active:scale-95 dark:bg-neutral-800 dark:text-white"
        shape="circle"
        size="large"
        title="切换主题"
      >
        <!-- 简单占位图标，可以使用一个常规的图标或文字占位 -->
        <component :is="LucideMonitor" class="icon-style" />
      </a-button>
    </template>
  </div>
</template>

<script lang="ts" setup>
// 导入 Lucide 图标
import { LucideMonitor, LucideMoon, LucideSun } from "lucide-vue-next";
import { computed, onMounted, ref } from "vue";

const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});

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

/* v-cloak 样式，防止在 Vue 加载之前的闪烁 */
[v-cloak] {
  display: none;
}
</style>
