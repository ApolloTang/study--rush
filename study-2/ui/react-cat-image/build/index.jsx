"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var cute_cat_jpg_1 = __importDefault(require("./cute-cat.jpg"));
var Cat = function (_a) {
    var children = _a.children;
    return (<div>
    <cute_cat_jpg_1.default src={cute_cat_jpg_1.default}/>
  </div>);
};
exports.default = Cat;
