import express, { Request, Response } from 'express'
import router from './router'
import bodyParser from 'body-parser'
import { NextFunction } from 'connect';

const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // 中间件req.body解析
app.use((req: Request, res: Response, next: NextFunction) => {
  req.name = 'xu'
  next()
})
app.use(router)


app.listen(7001, () =>{
  console.log('server is running')
})