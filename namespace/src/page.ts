// namespace Home {
//   class Header {
//     constructor() {
//       const ele = document.createElement('div')
//       ele.innerText='this is header'
//       document.body.appendChild(ele)
//     }
//   }
  
//   class Content {
//     constructor() {
//       const ele = document.createElement('div')
//       ele.innerText = 'this is content'
//       document.body.appendChild(ele)
//     }
//   }
  
//   class Footer {
//     constructor() {
//       const ele = document.createElement('div')
//       ele.innerText = 'this is footer'
//       document.body.appendChild(ele)
//     }
//   }
//    export class Page {
//     constructor() {
//       new Header()
//       new Content()
//       new Footer()
//     }
//   }
//   // 不使用namespace page里的类都会变成全局变量暴露出去
// }

///<reference path='./component.ts' />
namespace Home {
  export class Page {
    user: Component.User = {
      name: 'xu'
    }
    constructor() {
      new Component.Header()
      new Component.Content()
      new Component.Footer()
    }
  }
}