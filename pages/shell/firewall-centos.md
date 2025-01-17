# firewall-centos 常用命令

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
