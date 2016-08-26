# 第二周总结

##初始化node项目

##在命令行下初始化一个空的node项目，并安装开发项目时所需的依赖。
    1.建立你自己的项目文件,例如我们现做的postnet.建立一个postnet
    2.安装全局nrm，命令：
        npm install nrm -g
        换源：nrm use cnpm (查看当前使用的源nrm ls)
    3.初始化:
        npm init
        若在开发过程中需要jasmine测试框架，采用npm install jasmine -D安装jasmine库
    4.运行jasmine
        ./node_modules/.bin/jasmine(init)未初始化需要先初始化
    5.命令行打开本项目wstorm .
        若未在IDE中修改其打开方式，可进入webStorm选择tools-->Create Command-line Launcher选中即可
    6.在打开的IDE中可编辑文件以及目录，注意应先写测试再写实现。
