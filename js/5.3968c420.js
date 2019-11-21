(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{636:function(n,e,t){"use strict";t.r(e),e.default='<p align="center">\n  <img width="200" src="https://zarm.design/images/logo.ce68565d.svg">\n</p>\n\n<h1 align="center">Zarm-Web</h1>\n\n<div align="center">\n  \u4f17\u5b89\u79d1\u6280\u684c\u9762\u7aefUI\u7ec4\u4ef6\u5e93\uff0c\u57fa\u4e8eReact\u3002\n</div>\n\n## Version \u7248\u672c\n\n- \u5386\u53f2\u7248\u672c\uff1a[![npm package](https://img.shields.io/npm/v/dragon-ui.svg)](https://www.npmjs.org/package/dragon-ui)\n- \u5f00\u53d1\u7248\uff1a\u6682\u672a\u53d1\u5e03\n\n\n## Install \u5b89\u88c5\n\n\n\u4f7f\u7528npm\u5b89\u88c5\uff1a\n```bash\nnpm install zarm-web --save\n```\n\n\u6216\u8005\u901a\u8fc7cdn\u5f15\u5165umd\u6a21\u5757\uff1a\n```html\n<link rel="stylesheet" href="https://unpkg.com/zarm-web@latest/dist/zarm-web.min.css">\n<script type="text/javascript" src="https://unpkg.com/zarm-web@latest/dist/zarm-web.min.js"><\/script>\n```\n\n## Usage \u4f7f\u7528\n\n### \u5168\u7ec4\u4ef6\u5f15\u5165\n\n```js\nimport { Button, Cell } from \'zarm-web\';\nimport \'zarm-web/dist/zarm-web.min.css\';\n```\n\n### \u6309\u9700\u52a0\u8f7d\n\n- \u65b9\u6cd5\u4e00\uff08\u63a8\u8350\uff09\n\n> \u4f7f\u7528 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) \u81ea\u52a8\u52a0\u8f7dSass\u6587\u4ef6\n\n```js\n  // .babelrc or babel-loader option\n  {\n    "plugins": [\n      [\'import\', {\n        libraryName: \'zarm-web\',\n        style: true,\n      }],\n    ]\n  }\n```\n\n```js\nimport { Button, Cell } from \'zarm-web\';\n```\n\n- \u65b9\u6cd5\u4e8c\uff1a\n\n```js\nimport Button from \'zarm-web/lib/button\';\nimport \'zarm-web/lib/button/style\';\n```\n\n### \u5b9a\u5236\u4e3b\u9898\n\n\u901a\u8fc7\u4fee\u6539css\u53d8\u91cf\u5b9a\u4e49\u8fbe\u5230\u5b9a\u5236\u4e3b\u9898\u7684\u6548\u679c\n\n```js\ndocument.documentElement.style.setProperty(\'--theme-primary\', \'#108ee9\');\n```\n\n\u53d8\u91cf\u540d\u53ef\u53c2\u8003 [variable.scss](https://github.com/JeromeLin/zarm-web/blob/dev-zarm-web/components/style/themes/variable.scss)\n\n## Changelog \u66f4\u65b0\u65e5\u5fd7\n\n[CHANGELOG.md](https://github.com/JeromeLin/zarm-web/blob/dev-zarm-web/CHANGELOG.md)\n\n## License\n\nMIT\n'}}]);
//# sourceMappingURL=5.3968c420.js.map