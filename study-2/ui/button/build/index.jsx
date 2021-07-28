"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: red;\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: 300;\n    padding: 9px 36px;\n"], ["\n    background: red;\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: 300;\n    padding: 9px 36px;\n"])));
var Button = function (_a) {
    var children = _a.children;
    return <div>
  <StyledButton>
    {children}
  </StyledButton>
 </div>;
};
exports.default = Button;
var templateObject_1;
