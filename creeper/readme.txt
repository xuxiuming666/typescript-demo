1.npm init -y: 生成package.json文件
2.tsc --init： 生成tsconfig.json文件
3.将ts-node和typescript安装到项目依赖中-D
4.配置命令行npm run dev
5.配置命令行npm run build,且在tsconfig.json中将outDir: "./build",
这样可以将编译成的js文件统一放到build路径下。
6.自动编译运行：
"dev:build": "tsc -w",

"dev:start": "nodemon node ./build/crowller.js",

"dev": "concurrently npm:dev:*"