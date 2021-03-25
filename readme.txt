1.ts基础环境
安装ts： npm install typescript -g
运行：
1) tsc demo.ts 编译成demo.js 再运行demo.js
2) 安装npm install ts-node -g
ts-node demo.ts
2.函数类型

const getTotal:() => number = () => { return 123 }
() => number: 这是一个函数类型，返回值是number
() => { return 123 }： 具体的函数