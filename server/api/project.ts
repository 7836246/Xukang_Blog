export default defineEventHandler(async () => {
  // 定义项目类型
  interface Repository {
    name: string;
    description: string;
    link: string;
    repo: string;
    stars?: number; // 添加 stars 属性，stars 是可选的
  }

  const repositories: Repository[] = [
    {
      name: "Nuxt-Whois",
      description: "基于 Nuxt3 制作的 Whois 和 Dns 查询的小工具。",
      link: "https://github.com/7836246/Nuxt-Whois",
      repo: "7836246/Nuxt-Whois",
    },
    {
      name: "KangGo",
      description:
        "用 Go 语言编写的轻量级 Web 框架，旨在提供简单易用的开发体验。",
      link: "https://github.com/7836246/kanggo",
      repo: "7836246/kanggo",
    },
    {
      name: "Short-URL-Go",
      description: "支持千万级别的短链生成，Go 实现的短链接服务。",
      link: "https://github.com/7836246/short-url-go",
      repo: "7836246/short-url-go",
    },
  ];

  // 定义 GitHub API 返回的数据类型
  interface GitHubRepoResponse {
    stargazers_count: number;
  }

  // 缓存对象
  const cache: { [key: string]: { stars: number; timestamp: number } } = {};

  // 使用 GitHub API 获取每个仓库的 star 数量
  const fetchStarCount = async (repo: string): Promise<number> => {
    const cacheKey = repo;
    const currentTime = Date.now();
    const cacheExpiry = 24 * 60 * 60 * 1000; // 1 天的缓存时间（以毫秒为单位）

    // 检查缓存是否有效
    if (
      cache[cacheKey] &&
      currentTime - cache[cacheKey].timestamp < cacheExpiry
    ) {
      return cache[cacheKey].stars; // 返回缓存的 star 数量
    }

    // 如果缓存无效，发出 API 请求
    try {
      const response = await $fetch<GitHubRepoResponse>(
        `https://api.github.com/repos/${repo}`,
      );
      const stars = response.stargazers_count || 0;

      // 更新缓存
      cache[cacheKey] = {
        stars,
        timestamp: currentTime,
      };

      return stars;
    } catch (error) {
      console.error(`Failed to fetch stars for ${repo}:`, error);
      return 0;
    }
  };

  // 获取所有项目的 star 数量
  for (const repo of repositories) {
    repo.stars = await fetchStarCount(repo.repo); // 现在 TypeScript 知道 stars 是 Repository 类型的一部分
  }

  // 按 star 数量排序（降序）
  repositories.sort((a, b) => (b.stars || 0) - (a.stars || 0));

  return repositories;
});
