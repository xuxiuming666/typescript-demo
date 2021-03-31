"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false })); // 中间件req.body解析
app.use(function (req, res, next) {
    req.name = 'xu';
    next();
});
app.use(router_1.default);
app.listen(7001, function () {
    console.log('server is running');
});
