# 常见问题

## CentOS安装Nodejs
```shell
# 从https://nodejs.org/dist/下载安装包
wget https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz
# 解压包
tar -xvf node-v16.20.2-linux-x64.tar.xz
# 部署bin文件，类似windows快捷方式，/opt/node-v16.20.2-linux-x64/为解压目录
ln -s /opt/node-v16.20.2-linux-x64/bin/node /usr/local/bin/node
ln -s /opt/node-v16.20.2-linux-x64/bin/npm /usr/local/bin/npm
# 测试，nodejs插件全局安装时，需要自行去创建关联，类似上一步
node -v
npm -v
```

## 解决安装node-sass失败
```shell
# 方法1：设置sass_binary_site指向淘宝
npm config set sass_binary_site https://npmmirror.com/mirrors/node-sass
# 方法2：项目中安装node-sass时候指定sass_binary_site值
npm i node-sass --sass_binary_site=https://npmmirror.com/mirrors/node-sass
# 方法3：从https://npmmirror.com/mirrors/node-sass/网址手动下载需要的版本（网址最后的左斜杠一定要有！！！），保存到电脑npm缓存位置
C:\Users\用户名\AppData\Roaming\npm-cache\node-sass\8.0.0\win32-x64-83_binding.node
```

## 解决github pull/push超时
```shell
# 新建~/.ssh/config文件，添加以下
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```

## 解决vue-cli2脚手架生成的项目，使用模板字符串解析错误问题

> 办法一（推荐）
```javascript
// package.json升级以下包到此版本
"devDependencies": {
  "eslint": "^7.32.0",
  "eslint-loader": "^2.2.1",
  "eslint-plugin-vue": "^7.20.0",
  "babel-eslint": "^10.1.0",
}
// .eslintrc.js内rules添加以下规则（若无此习惯可不添加，自用）
rules: {
  'vue/require-prop-type-constructor': 'off',
  'vue/no-unused-components': 'off',
  'vue/no-mutating-props': 'off'
}
```

> 办法二

```javascript
// .eslintrc.js内rules添加以下规则
rules: {
  'template-curly-spacing': 'off', // 关闭空格校验
  'indent': 'off'  // 关闭缩进规则
}
```