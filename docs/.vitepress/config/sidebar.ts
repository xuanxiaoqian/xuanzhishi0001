import { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = {
  ['/pages/交易/']: [
    {
      items: [
        {
          text: "盯盘程序",
          link: "/pages/交易/1-盯盘程序"
        },
        {
          text: "理财",
          link: "/pages/交易/2-理财"
        },
        {
          text: "交易本质",
          link: "/pages/交易/3-交易本质"
        }
      ]
    }
  ]
}