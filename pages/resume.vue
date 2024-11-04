<template>
  <article class="flex max-w-none flex-col gap-8 print:text-xs">
    <!-- 个人信息部分 -->
    <section
      class="flex flex-col lg:flex-row justify-between items-center py-3"
    >
      <!-- 左侧文字描述 -->
      <div class="text-sm text-center lg:text-left lg:w-1/3">
        <p>邮箱: 7836246@qq.com</p>
      </div>
      <!-- 中间名字 -->
      <div class="text-center text-2xl font-bold lg:text-3xl">
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
        <li>
          精通 Golang，擅长并发编程、Goroutines、高性能数据结构及 GMP
          调度模型优化
        </li>
        <li>
          具备 Nuxt 3 前端开发经验，熟悉 Composition API 和 Uno CSS 等工具
        </li>
        <li>
          深入理解 MySQL 优化，熟悉索引优化、查询优化和事务管理；熟悉使用 Redis
          进行缓存和分布式锁操作
        </li>
        <li>
          精通 Linux 系统管理和 Docker 容器化部署，具备 Git
          版本控制的团队协作能力
        </li>
        <li>
          擅长微服务架构设计和高并发系统优化，具备分布式缓存和异步编程的实践经验
        </li>
      </ul>
    </section>

    <!-- 工作经验部分 -->
    <section>
      <h2 class="text-lg font-bold border-b pb-2">工作经验</h2>
      <div class="mt-4">
        <h3 class="text-base font-semibold">后端开发 - 技术部</h3>
        <p class="text-sm">
          深圳市禾葡兰化妆品有限公司 | 2024年03月 - 2024年05月
        </p>
        <ul class="list-disc pl-5 mt-2">
          <li>
            负责 CRM 系统中销售单转物流单模块的设计与实现，优化订单处理流程
          </li>
          <li>
            使用 Golang 开发高效 RESTful API，实现订单状态实时跟踪和异步处理
          </li>
          <li>
            完成 PHP 到 Go 的模块迁移，重构 MySQL
            存储过程，大幅提升数据库性能和稳定性
          </li>
          <li>
            参与禾粉圈小程序用户体系的升级，优化用户分层、积分管理和成长值计算逻辑
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <h3 class="text-base font-semibold">Go开发工程师 - 开发部</h3>
        <p class="text-sm">
          安徽阜南县奇灵信息科技公司 | 2022年10月 - 2024年02月
        </p>
        <ul class="list-disc pl-5 mt-2">
          <li>
            负责知识文库系统的后端开发，优化数据结构和缓存策略，提高系统性能
          </li>
          <li>设计高性能 RESTful API 接口，管理文档、分类、标签和权限</li>
          <li>使用 Nuxt 3（SSR）开发用户界面，提升页面加载速度和 SEO 效果</li>
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
        <h3 class="text-base font-semibold">Whois 和 DNS 批量查询工具</h3>
        <p class="text-sm">2024年06月 - 2024年08月</p>
        <ul class="list-disc pl-5 mt-2">
          <li>基于 Nuxt 3 开发前端界面，提供直观的 Whois 和 DNS 查询体验</li>
          <li>
            使用 Golang
            后端处理高并发批量查询，实现请求限速、防抖和异步任务队列调度
          </li>
          <li>
            结合 Nuxt 3 的 Nitro 中间层和 Redis 缓存，优化查询性能和系统资源使用
          </li>
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
