<template>
  <Html class="dark:bg-neutral-950" />
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup></script>
<style>
@media (min-width: 400px) and (prefers-reduced-motion: no-preference) {
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(20px);
  }

  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }

  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
