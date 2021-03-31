//装饰器本身是一个函数，通过@符号来使用
//类装饰器的参数是构造函数
function testDecorator1() {
  return function (constructor: any) {
  constructor.prototype.getName = () => {
    console.log('xu')
  }
}
}

@testDecorator1() // 装饰器会在类创建好之后立即执行
class Test1 {
}

const test1 = new Test1()
