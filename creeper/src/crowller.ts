import superagent from 'superagent'
import fs from 'fs'
import path from 'path'
// import DataAnalyser from './DataAnalyser'
import DataAnalyser from './instanceAnalyser'

export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

export default class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');
  private async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    fs.writeFileSync(this.filePath, fileContent)
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess()
  }
}

// const url = 'http://www.dell-lee.com'
// const analyzer = DataAnalyser.getInstance()
// new Crowller(url, analyzer)