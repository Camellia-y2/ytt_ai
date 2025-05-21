# git

开源的分布式版本控制工具
- 代码的安全
- 代码的协作，共享 pull
- github gitee 等仓库中 (main)

## repo
   - 仓库
   - create a repo

# git 配置
 github gittee身份
git config --global user.name "用户名"
git config --global user.email "邮箱"

 当前要提交的：工作区
 要先放入暂存区(stage)，再提交到仓库(里面是各个文件的快照)
 暂存区：可以修改删除
 仓库：提交最后确定的严谨的
 多次暂存区的提交一次性提交到仓库
 - git log --oneline 查看提交日志
 - git add 文件名 把文件放入暂存区
 - git commit -m "提交信息" 把暂存区的文件提交到仓库
 - git status 查看状态(有没有修改？有没有将修改后的文件添加到暂存区)
 - git reset --hard 版本号 回退到指定版本