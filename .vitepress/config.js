// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Vite',
  lang: "zh-CN",
  description: '下一代前端开发与构建工具',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: [
      { text: '指引', link: '/guide/' },
      { text: '配置', link: '/config/' },
      { text: '插件', link: '/plugins/' },
      {
        text: '更新日志',
        link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
      }
    ],

    carbonAds: {
      carbon: 'CEBIEK3N',
      placement: 'vitejsdev'
    },

    sidebar: {
      '/config/': 'auto',
      // catch-all fallback
      '/': [
        {
          text: '指引',
          children: [
            {
              text: '介绍',
              link: '/guide/introduction'
            },
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '功能',
              link: '/guide/features'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {
              text: '比较',
              link: '/guide/comparisons'
            },
            {
              text: '从 v1 迁移',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'API',
          children: [
            {
              text: '配置参考',
              link: '/config/'
            },
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            }
          ]
        }
      ]
    }
  },
}
