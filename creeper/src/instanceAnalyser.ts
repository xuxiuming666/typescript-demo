import cheerio from 'cheerio'
import fs from 'fs'
import { Analyzer } from './crowller'
interface Course {
  title: string
}
interface courseResult {
  time: number;
  data: Course[]
}
interface Content {
  [propName: number]: Course[]  // 1574606086622: [ {title: '1234'}, {title: '1234ddd'} ]
}
export default class DataAnalyser implements Analyzer {
  private static instance: DataAnalyser
  static getInstance() {
    if (!DataAnalyser.instance) {
      DataAnalyser.instance = new DataAnalyser()
    }
    return DataAnalyser.instance
  }
  private getCourseInfo(html: string) {
    const $ = cheerio.load(html)
    const courseItem = $('.course-item')
    const courseInfo: Course[] = [] 
    courseItem.map((index, ele) => {
      const descs = $(ele).find('.course-desc')
      const title = descs.text()
      courseInfo.push({ title })
    })
    return {
      time: new Date().getTime(),
      data: courseInfo
    }
  }

  private generateJsonContent (courseInfo: courseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseInfo, filePath)
    return JSON.stringify(fileContent)
  }

  private constructor() {}
}