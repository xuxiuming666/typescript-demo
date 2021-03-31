import { Router, Request, Response } from 'express'
import Crowller from './crowller'
import DataAnalyser from './instanceAnalyser'
import path from 'path'
import fs from 'fs'
interface RequestWithBody extends Request {
  body: {
     [key: string]: string | undefined
  }
} // .d.ts文件描述不准确，都为any类型

const router = Router()
router.get('/', (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
   res.send(`
   <html>
      <body>
        <a href='/getData'>爬取内容</a>
        <a href='/showData'>展示内容</a>
        <a href='/logout'>退出</a>
      </body>
    </html>`)
  } else {
    res.send(`
    <html>
      <body>
        <form method='post' action='/login'>
          <input type='password' name='password' />
          <button>提交</button>
        </form>
      </body>
    </html>
  `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.redirect('/')
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { password } = req.body
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    res.send('已登陆')
  } else {
    if (password === '123' && req.session) {
      req.session.login = true
      res.send('登陆成功')
    } else {
      res.send('登陆失败')
    }
  }
})

router.get('/getData', (req: RequestWithBody, res: Response) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    const url = 'http://www.dell-lee.com'
    const analyzer = DataAnalyser.getInstance()
    new Crowller(url, analyzer)
    res.send('getData success')
  } else {
   res.send('请登陆后爬取内容')
  }
})

router.get('/showData', (req: RequestWithBody, res: Response) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    try {
      const position = path.resolve(__dirname, './data/course.json')
      const result = fs.readFileSync(position, 'utf8')
      res.json(JSON.parse(result))
    } catch(e) {
      res.send('尚未爬取到内容')
    }
  } else {
    res.send('请登陆后查看数据')
  }
})

export default router