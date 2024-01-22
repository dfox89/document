## git
```shell
# 全局配置用户名邮箱
git config --global user.name "你的名称"
git config --global user.email "你的邮箱"

# 配置代理
git config --global http.proxy socks5 127.0.0.1:7890
git config --global https.proxy socks5 127.0.0.1:7890
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
# 查看代理
git config --global --get http.proxy
git config --global --get https.proxy
# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 查看git配置
git config --list

# 显示所有远程仓库
git remote -v

# 修改本地仓库关联的远程仓库地址
git remote set-url origin 新仓库地址

# 删除本地分支
git branch -d dev

# 删除远程分支
git push origin --delete dev

# 查看远程仓库与本地仓库的关系
git remote show origin

# 清理本地仓库中，远程已删除的分支
git remote prune origin

# 合并分支
git checkout master
git merge dev

# squash合并分支，新建一个提交节点，但不会保留对合入分支的引用
git checkout master
git merge --squash dev

# rebase合并分支，将合入分支上超前的节点在待合入分支上重新提交一遍
git checkout master
git rebase dev

# 合并指定commit
git checkout master
git cherry-pick <commitHash>
# 一次转移多个提交
git cherry-pick <HashA> <HashB>
# 转移从 A 到 B 的所有提交
git cherry-pick A..B


# 合并冲突后继续
git cherry-pick --continue
# 放弃合并
git rebase --abort
```

## pm2
```shell
# 列出PM2启动的所有的应用程序
pm2 list

# 启动app.js应用程序，并命名为myApp
pm2 start app.js --name myApp

# 停止名为myApp的应用程序
pm2 stop myApp

# 停止所有的应用程序
pm2 stop all

# 关闭并删除所有应用
pm2 delete all
```

## vue脚手架
> vue-cli
```shell
# 安装vue-cli
npm install -g @vue/cli
# 安装桥接工具，使得可以使用旧版的vue init
npm install -g @vue/cli-init
# 查看vue-cli脚手架版本
vue -V
# 创建项目
vue create your-project
# 创建vue-cli2项目
vue init webpack your-project
```
> vite
```shell
# vite
npm create vite
```

## ssh
```shell
# 生成密钥
ssh-keygen -t rsa -b 4096 -C "youremail@example.com"
```
*默认生成的两个文件是：id_rsa私钥文件，id_rsa.pub公钥文件，密钥默认保留在 ~/.ssh 目录中*
+ -t：指定要创建的密钥类型；
+ -C：添加注释；
+ -b：指定密钥长度；
+ -e：读取openssh的私钥或者公钥文件；
+ -f：指定用来保存密钥的文件名；
+ -i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥；
+ -l：显示公钥文件的指纹数据；
+ -N：提供一个新密语；
+ -P：提供（旧）密语；
+ -q：静默模式；

## npm
```shell
# 列出全局安装的包
npm list -g --depth 0
# 查看全局安装目录
npm config get prefix
# npm配置
npm config list -l
# 安装pnpm
npm install -g pnpm
# 设置淘宝镜像
npm config set registry https://registry.npm.taobao.org/
# 设置sass_binary_site指向淘宝
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
# 解决安装node-sass失败
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

## firewall-centos
```shell
# 启动防火墙
systemctl start firewalld
# 停止防火墙 
systemctl stop firewalld
# 查看防火墙状态
systemctl status firewalld
# 更新防火墙规则
firewall-cmd --reload
# 查看所有打开的端口
firewall-cmd --list-ports
# 增加端口
# --zone 作用域
# --add-port=8080/tcp 格式为：端口/通讯协议；add表示添加，remove则对应移除
# --permanent 永久生效，没有此参数重启后失效
firewall-cmd --zone=public --add-port=8080/tcp --permanent
```

## nvm
> 打开安装目录下的settings.txt，添加以下内容，修改镜像源
```text
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
```shell
## 查看nvm版本
nvm -v
## 列出已安装的版本
nvm list
## 切换版本
nvm use 14.21.3
## 安装指定大版本号的最新版本
nvm install 14.21.3
## 删除指定版本
nvm unstall 14.21.3
```

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