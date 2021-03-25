import superagent from 'superagent'
import cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'
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
class Crowller {
  private url = 'http://www.dell-lee.com'
  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  getCourseInfo(html: string) {
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

  generateJsonContent (courseInfo: courseResult) {
    const filePath = path.resolve(__dirname, '../data/course.json')
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
  }

  async initSpiderProcess() {
    const filePath = path.resolve(__dirname, '../data/course.json')
    const html = await this.getRawHtml()
    const courseInfo = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseInfo)
    fs.writeFileSync(filePath, JSON.stringify(fileContent))
  }

  constructor() {
    this.initSpiderProcess()
  }
}

const crowller = new Crowller()