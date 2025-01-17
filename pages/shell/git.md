# git 常用命令

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
