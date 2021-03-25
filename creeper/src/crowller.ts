import superagent from 'superagent'
import cheerio from 'cheerio'
interface Course {
  title: string
}
class Crowller {
  private url = 'http://www.dell-lee.com'
  async getRawHtml() {
    const result = await superagent.get(this.url)
    this.getCourseInfo(result.text)
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
  constructor() {
    this.getRawHtml()
  }
}

const crowller = new Crowller()