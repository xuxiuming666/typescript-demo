import { Router, Request, Response } from 'express'
import Crowller from './crowller'
import DataAnalyser from './instanceAnalyser'

const router = Router()
router.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

router.get('/getData', (req: Request, res: Response) => {
  const url = 'http://www.dell-lee.com'
  const analyzer = DataAnalyser.getInstance()
  new Crowller(url, analyzer)
  res.send('by world')
})

export default router