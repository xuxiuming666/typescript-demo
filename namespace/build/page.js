"use strict";
var Component;
(function (Component) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'this is header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Component.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'this is content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    Component.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'this is footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
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
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'xu'
            };
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
