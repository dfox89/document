import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "我的归档",
  description: "网站，资源，问题等存档",
  lang: 'zh-Hans',
  srcExclude: ['**/README.md'],
  // 切换主题
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '页面导航',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '常见问题', link: '/pages/question' }
    ],
    sidebar: [
      {
        text: '命令行',
        collapsed: false,
        items: [
          { text: 'firewall-centos', link: '/pages/shell/firewall-centos' },
          { text: 'Git', link: '/pages/shell/git' },
          { text: 'npm', link: '/pages/shell/npm' },
          { text: 'nvm', link: '/pages/shell/nvm' },
          { text: 'ollama', link: '/pages/shell/ollama' },
          { text: 'pm2', link: '/pages/shell/pm2' },
          { text: 'ssh', link: '/pages/shell/ssh' },
          { text: 'vite', link: '/pages/shell/vite' },
          { text: 'vue-cli', link: '/pages/shell/vue-cli' },
        ]
      },
      {
        text: '库/插件',
        collapsed: false,
        items: [
          { text: 'composer', link: '/pages/lib/composer' },
          { text: 'css', link: '/pages/lib/css' },
          { text: 'Github Action', link: '/pages/lib/github-action' },
          { text: 'javascript', link: '/pages/lib/javascript' },
          { text: 'nodejs', link: '/pages/lib/nodejs' },
          { text: 'VS Code', link: '/pages/lib/vs-code' },
          { text: 'vue', link: '/pages/lib/vue' },
          { text: '其它', link: '/pages/lib/other' },
        ]
      },
      { text: '日常网站', link: '/pages/site' },
      { text: '常见问题', link: '/pages/question' },
      { text: '好用软件', link: '/pages/software' },
      { text: 'console.log', link: '/pages/console' },
      {
        text: '安装',
        collapsed: false,
        items: [
          { text: 'Ollama使用GPU', link: '/pages/install/ollama-use-gpu' },
        ]
      },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn" target="_blank">苏ICP备15040094号-2</a> | <a href="https://www.landui.com?refer_host=lanMjEwMDB1aQ==" target="_blank"><img src="https://www.landui.com/hosting/free_host_img" style="display:none;">蓝队云提供免费虚拟主机</a>',
    },
  }
})
