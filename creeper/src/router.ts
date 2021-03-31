import { Router, Request, Response } from 'express'
import Crowller from './crowller'
import DataAnalyser from './instanceAnalyser'
interface RequestWithBody extends Request {
  body: {
     [key: string]: string | undefined
  }
} // .d.ts文件描述不准确，都为any类型

const router = Router()
router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method='post' action='/getData'>
          <input type='password' name='password' />
          <button>提交</button>
        </form>
      </body>
    </html>
  `)
})

router.post('/getData', (req: RequestWithBody, res: Response) => {
  const { password } = req.body
  if (password === '123') {
     const url = 'http://www.dell-lee.com'
     const analyzer = DataAnalyser.getInstance()
     new Crowller(url, analyzer)
     res.send('getData success')
  } else {
     res.send('password error!')
  }
})

export default router