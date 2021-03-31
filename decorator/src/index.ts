const userInfo: any = undefined
function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value
  descriptor.value = function() {
    try {
      fn()
    } catch(e) {
      console.log(`${msg} wrong!`)
    }
  }
}
}


class Test {
  @catchError('username')
  getName() {
    return userInfo.name
  }
  @catchError('userage')
  getAge() {
    return userInfo.age
  }
}
const test = new Test()
test.getName()
test.getAge()