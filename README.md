1.环境配置
    nodejs安装，以稳定的版本为。傻瓜式安装就可以
    命令： node -v 检查安装是否成功并查看到版本    npm -v 同理查看安装node的时候是不是也安装了npm同时查看版本
2.创建文件夹 进入文件夹

3.初始化这个demo，会出现一些配置，包名、描述等等  一路回车yes就可以了

4.编辑器打开项目查看

整理

再整理


5.初始化之后 接下来安装 webpack
方式有两种：
第一：全局安装 npm install webpack webpack-cli -g   安装webpack  同时安装webpack-cli工具

注意：一般不推荐全局安装   全局安装后如果你有两个项目的wenpack都是以来全局的webpack，但是两个项目的webpack配置版本不一样这样你的项目肯定有一个是启动不起来的，就要删除webpack重新安装对应的版本，所以还是项目安装比较好

删除全局安装的指令：npm uninstall webpack webpack-cli -g  zhe

第二：在本项目中安装npm install webpack webpack-cli --save-dev      或者直接-D

项目中就多了好多模块

如果想安装指定版本的webpack，可以这样写 npm install webpack@版本号 webpack-cli -D  
