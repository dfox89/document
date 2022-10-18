## git
```shell
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

## vue-cli
```shell
# 安装
npm install -g @vue/cli
# 安装桥接工具，使得可以使用旧版的vue init
npm install -g @vue/cli-init

# 查看脚手架版本
vue -V

# 创建项目
vue create your-project
# 创建vue-cli2项目
vue init webpack your-project
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