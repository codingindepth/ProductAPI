exports.id = "main";
exports.modules = {

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive\";\n\n//# sourceURL=webpack:///./src_sync?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\n__webpack_require__(\"./src sync recursive\")();\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\ndotenv.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\nvar server = app.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n});\n// Send message for default URL\napp.get('/', function (req, res) { return res.send('Hello World with Express'); });\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};