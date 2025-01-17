# pm2 常用命令

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
