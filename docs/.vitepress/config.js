export default {
  title: 'hello baby', //站点标题
  description: 'baby docs',//mate标签description，多用于搜索引擎抓取摘要
  base: "/blog/",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/baby.png'
      }
    ]
  ],
  themeConfig: {
    siteTitle: "Baby",
    logo: "/baby.png",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    socialLinks: [
      { icon: "github", link: "https://gitee.com/geeksdidi" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/articles/组件库环境搭建" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          collapsible: true,
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    }
  },
}