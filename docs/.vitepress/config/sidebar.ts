import { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = {
  ['/pages/交易/心得/']: [
    {
      items: [
        {
          text: "盯盘程序",
          link: "/pages/交易/心得/1-盯盘程序"
        },
        {
          text: "理财",
          link: "/pages/交易/心得/2-理财"
        },
        {
          text: "交易本质",
          link: "/pages/交易/心得/3-交易本质"
        }
      ]
    }
  ],
  ['/pages/交易/系统/']: [
    {
      items: [
        {
          text: "总览",
          link: "/pages/交易/系统/1-总览"
        }
      ]
    }
  ]
}