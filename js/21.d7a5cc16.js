(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{665:function(n,t,i){"use strict";i.r(t),t.default='## Loading \u52a0\u8f7d\n\u52a0\u8f7d\u4e2d\u7ec4\u4ef6\u3002\n\n### \u57fa\u7840\u7528\u6cd5\n\n:::demo \u901a\u8fc7`visible`\u5c5e\u6027\u63a7\u5236\u663e\u9690\u3002\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading: false\n    }\n  }\n  toggleLoading() {\n    this.setState({\n      loading: !this.state.loading\n    });\n  }\n  render() {\n    return (\n      <div>\n        <Loading visible={this.state.loading}>\n          \u8fd9\u91cc\u662f\u5185\u5bb9\n        </Loading>\n        <br />\n        <Button theme="info" onClick={() => this.toggleLoading()}>\n          \u663e\u793a/\u9690\u85cf\n        </Button>\n      </div>\n    )\n  }\n```\n:::\n\n### Attributes\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      | \u53ef\u9009\u503c       | \u9ed8\u8ba4\u503c   |\n|---------- |-------- |---------- |-------------  |-------- |\n| visible   |  \u662f\u5426\u663e\u793a  | boolean |  -     |    false    |\n'}}]);
//# sourceMappingURL=21.d7a5cc16.js.map