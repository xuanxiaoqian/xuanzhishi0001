import { DefaultTheme } from 'vitepress'

export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "交易",
    items: [
      {
        text: "心得",
        link: "/pages/交易/心得/1-盯盘程序",
        activeMatch: "/pages/交易/心得/"
      },
      {
        text: "系统",
        link: "/pages/交易/系统/1-总览",
        activeMatch: "/pages/交易/系统/"
      }
    ]
  }
]