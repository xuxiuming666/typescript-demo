import superagent from 'superagent'
import fs from 'fs'
import path from 'path'
import DataAnalyser from './DataAnalyser'

export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');
  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    fs.writeFileSync(this.filePath, fileContent)
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess()
  }
}

const url = 'http://www.dell-lee.com'
const analyzer = new DataAnalyser()
new Crowller(url, analyzer)