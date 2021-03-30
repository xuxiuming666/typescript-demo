"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var DataAnalyser = /** @class */ (function () {
    function DataAnalyser() {
    }
    DataAnalyser.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseItem = $('.course-item');
        var courseInfo = [];
        courseItem.map(function (index, ele) {
            var descs = $(ele).find('.course-desc');
            var title = descs.text();
            courseInfo.push({ title: title });
        });
        return {
            time: new Date().getTime(),
            data: courseInfo
        };
    };
    DataAnalyser.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    DataAnalyser.prototype.analyze = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return DataAnalyser;
}());
exports.default = DataAnalyser;
