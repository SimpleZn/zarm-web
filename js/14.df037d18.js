(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{650:function(n,e,t){"use strict";t.r(e),e.default='## DatePicker \u65e5\u671f\u9009\u62e9\u5668\n\u65e5\u671f\u9009\u62e9\u5668\u3002\n\n### \u57fa\u7840\u7528\u6cd5\n\n:::demo\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: \'\'\n    };\n  }\n  render() {\n    return (\n      <div>\n       <DatePicker\n          radius\n          allowInput\n          style={{width: 200}}\n          value={this.state.date}\n          onChange={(date) => {\n            console.log(date)\n            this.setState({date});\n          }}\n        />\n      </div>\n    )\n  }\n```\n:::\n\n### DateTimePicker\n\nDateTimePicker\u65f6\u5019showTime\u9700\u8981\u4e3atrue\u4e14format\u5fc5\u4f20\n\n:::demo\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      date1: \'\',\n      date2: \'\',\n    };\n  }\n  render() {\n    return (\n      <div>\n       <DatePicker\n          format="yyyy/MM/dd hh:mm:ss"\n          radius\n          showTime\n          style={{width: 200}}\n          value={this.state.date1}\n          // placeholder="\u8bf7\u9009\u62e9\u65e5\u671f"\n          onChange={(date1) => {\n            console.log(date1);\n            this.setState({date1});\n          }}\n        />\n\n        <DatePicker\n          format="yyyy-MM-dd hh:mm:ss"\n          radius\n          showTime\n          style={{width: 200, marginLeft: 24}}\n          value={this.state.date2}\n          // placeholder="\u8bf7\u9009\u62e9\u65e5\u671f"\n          onChange={(date2) => {\n            console.log(date2);\n            this.setState({date2});\n          }}\n        />\n      </div>\n    )\n  }\n```\n:::\n\n### range \u7528\u6cd5\n\n:::demo\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: []\n    };\n  }\n  render() {\n    return (\n      <div>\n       <DatePicker\n          radius\n          isRange\n          style={{width: 300}}\n          value={this.state.date}\n          // placeholder="\u8bf7\u9009\u62e9\u8d77\u59cb\u65e5\u671f"\n          onChange={(date) => {\n            console.log(date)\n            this.setState({date});\n          }}\n        />\n      </div>\n    )\n  }\n```\n:::\n\n### range time \u7528\u6cd5\n\n:::demo\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: []\n    };\n  }\n  render() {\n    return (\n      <div>\n       <DatePicker\n          radius\n          isRange\n          showTime\n          format="yyyy-MM-dd hh:mm:ss"\n          style={{width: 350}}\n          value={this.state.date}\n          // placeholder="\u8bf7\u9009\u62e9\u8d77\u59cb\u65e5\u671f"\n          onChange={(date) => {\n            console.log(date)\n            this.setState({date});\n          }}\n        />\n      </div>\n    )\n  }\n```\n:::\n\n### \u7981\u7528\u72b6\u6001\n\n\u4e0d\u53ef\u7528\u72b6\u6001\u3002\n\n:::demo \u53ef\u4ee5\u4f7f\u7528`disabled`\u5c5e\u6027\u6765\u5b9a\u4e49\u662f\u5426\u53ef\u7528\u3002\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      date1: \'\',\n      date2: \'\'\n    };\n  }\n  render() {\n    return (\n      <div>\n       <DatePicker\n          radius\n          disabled\n          style={{width: 200}}\n          value={this.state.date1}\n          // placeholder="\u8bf7\u9009\u62e9\u65e5\u671f"\n          onChange={(date1) => {\n            console.log(date1)\n            this.setState({date1});\n          }}\n        />\n\n        <DatePicker\n          isDisabled\n          format="yyyy-MM-dd hh:mm:ss"\n          radius\n          showTime\n          style={{width: 200, marginLeft: 24}}\n          value={this.state.date}\n          onChange={(date) => {\n            this.setState({date});\n          }}\n        />\n      </div>\n    )\n  }\n```\n:::\n\n\n### Attributes\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      | \u53ef\u9009\u503c       | \u9ed8\u8ba4\u503c   |\n|---------- |-------- |---------- |-------------  |-------- |\n| value     | \u9009\u4e2d\u65e5\u671f\u503c   | string / string[] |   -   |    -   |\n| defaultValue  | \u9ed8\u8ba4\u503c | string |   -   |    -   |\n| showTime | \u662f\u5426\u663e\u793a\u65f6\u95f4\u9009\u62e9\u5668 | boolean | - | false |\n| isRange | \u662f\u5426\u663e\u793a\u65e5\u671f\u8303\u56f4\u9009\u62e9\u5668 | boolean | - | false |\n| format  | \u56de\u8c03\u53c2\u6570\u65e5\u671f\u683c\u5f0f | string |   -   |    \'yyyy-MM-dd\'   |\n| min  | \u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f | string |   -   |    \'\'   |\n| max  | \u53ef\u9009\u7684\u6700\u5927\u65e5\u671f | string |   -   |    \'\'   |\n| placeholder | \u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u6848 | string |   -   |   -  |\n| radius | \u662f\u5426\u5706\u89d2 | boolean |   -   |   false  |\n| isDisabled | \u662f\u5426\u7981\u7528 | boolean |   -   |   false  |\n| allowInput | \u662f\u5426\u5141\u8bb8\u8f93\u5165\u65e5\u671f | boolean |   -   |   false  |\n\n\n### Events\n| \u4e8b\u4ef6\u540d\u79f0 | \u8bf4\u660e | \u56de\u8c03\u53c2\u6570 |\n|---------- |-------- |---------- |\n| onChange | \u65e5\u671f\u53d8\u66f4\u56de\u8c03 |  date |\n| onInputInvalidDate | \u624b\u52a8\u8f93\u5165\u7684\u65e5\u671f\u975e\u6cd5\u65f6\u56de\u8c03 |  date |\n'}}]);
//# sourceMappingURL=14.df037d18.js.map