// //装饰器本身是一个函数，通过@符号来使用
// //类装饰器的参数是构造函数
// function testDecorator () {
//   return function <T extends new(...args: any[]) => {}>(constructor: T) {
//     return class extends constructor {
//       name = 'xiuming'
//       getName () {
//         return this.name
//       }
//     }
//   }
// }

// // @testDecorator() // 装饰器会在类创建好之后立即执行
// const Test = testDecorator()(
//   class {
//     name: string
//     constructor(name: string) {
//       this.name = name
//     }
//   }
// )

// const test = new Test('xu')
// console.log(test.getName())