import path from 'path'
import fs from 'fs'

module.exports = {
  lang: 'zh-CN',
  title: 'awesome-pdf',
  base: '/',
  description: '减少重复代码和开发成本的javascript工具库',
  lastUpdated: true,
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/kv.png' }],
  ],
  themeConfig: {
    lastUpdatedText: 'Updated Date',
    sidebar: {
      '/book/': sidebarbook(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Simon-He95/awesome-pdf' },
    ],
    editLink: {
      pattern: 'https://github.com/Simon-He95/awesome-pdf',
      text: '在GitHub编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present SimonHe',
    },
    algolia: {
      appId: 'STWB4WOZ42',
      apiKey: '1701b060177b65718c4edbc4b1a595e3',
      indexName: 'awesome-pdf',
    },
  },
}

function sidebarbook() {
  const books = fs.readdirSync(path.resolve(__dirname, '../public'))

  return [

    {
      text: '',
      collapsible: false,
      items: books.map((book) => {
        const bookName = book.replace('.pdf', '')
        return { text: bookName, link: `/book/${bookName}` }
      }),
    },
  ]
}
