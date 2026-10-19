# skills 常用命令

```shell
# 指定创建符号链接，以管理员身份运行 PowerShell
New-Item -ItemType SymbolicLink -Path "C:\Users\用户目录\.claude\skills\技能名称" -Target "C:\Users\用户目录\.agents\skills\技能名称"
```

```shell
# 列出所有已安装的技能
skills list -g

# 查找技能
skills find <查询字符串>

# 将技能安装到全局目录
skills add https://github.com/minimax-ai/cli --skill mmx-cli -g

# 更新技能
skills update <技能名>

# 删除单个技能（指定名称）
skills remove <技能名>
# 全局范围删除
skills remove -g <技能名>
# 交互式删除，不带技能名，会列出所有已安装技能供你选择删除
skills remove
# 按 Agent 删除，仅从特定 Agent 中移除该技能
skills remove <技能名> -a <agent名>
```
