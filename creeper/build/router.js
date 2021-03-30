"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = __importDefault(require("./crowller"));
var instanceAnalyser_1 = __importDefault(require("./instanceAnalyser"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('hello world');
});
router.get('/getData', function (req, res) {
    var url = 'http://www.dell-lee.com';
    var analyzer = instanceAnalyser_1.default.getInstance();
    new crowller_1.default(url, analyzer);
    res.send('by world');
});
exports.default = router;
