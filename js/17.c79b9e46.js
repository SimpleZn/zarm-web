(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{641:function(n,o,e){"use strict";e.r(o),o.default='# Grid \u6805\u683c\n\n\n\n## \u57fa\u7840\u7528\u6cd5\n\n```jsx\nimport { Row, Col } from \'zarm-web\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <Row>\n          <Col span={12}>col-12</Col>\n          <Col span={12}>col-12</Col>\n        </Row>\n        <Row>\n          <Col span={8}>col-8</Col>\n          <Col span={8}>col-8</Col>\n          <Col span={8}>col-8</Col>\n        </Row>\n      </React.Fragment>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode)\n```\n\n\n\n## \u8bbe\u7f6e\u6805\u683c\u95f4\u9699gutter\n\n```jsx\nimport { Row, Col } from \'zarm-web\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Row gutter="16">\n        <Col span={8}><div className="grid-box">col-8</div></Col>\n        <Col span={8}><div className="grid-box">col-8</div></Col>\n        <Col span={8}><div className="grid-box">col-8</div></Col>\n      </Row>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode)\n```\n\n\n\n## \u8bbe\u7f6e\u6805\u683c\u504f\u79fb\n\noffset\u4e3a\u504f\u79fb\u6570\u91cf\n\n```jsx\nimport { Row, Col } from \'zarm-web\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <Row>\n          <Col span={4} offset={3}>1</Col>\n          <Col span={4} offset={2}>2</Col>\n        </Row>\n        <Row>\n          <Col span={4} offset={16}>3</Col>\n          <Col span={4}>4</Col>\n        </Row>\n      </React.Fragment>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode)\n```\n\n## flex\u5e03\u5c40\u65b9\u5f0f\u7684\u6805\u683c\n\njustify\u8bbe\u7f6e\u6a2a\u8f74\u5bf9\u9f50\u65b9\u5f0f align\u8bbe\u7f6e\u7eb5\u8f74\u5bf9\u9f50\u65b9\u5f0f\n\ntype\u8bbe\u7f6e\u5e03\u5c40\u65b9\u5f0f\n\n```jsx\nimport { Row, Col } from \'zarm-web\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <Row type="flex" justify="start">\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n        </Row>\n        <Row type="flex" justify="center">\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n        </Row>\n        <Row type="flex" justify="end">\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n        </Row>\n        <Row type="flex" justify="space-between">\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n        </Row>\n        <Row type="flex" justify="space-around">\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n          <Col span={4}>col-4</Col>\n        </Row>\n        <Row type="flex" justify="center" align="top">\n          <Col span={4}><p className="height-100">col-4</p></Col>\n          <Col span={4}><p className="height-50">col-4</p></Col>\n          <Col span={4}><p className="height-120">col-4</p></Col>\n          <Col span={4}><p className="height-80">col-4</p></Col>\n        </Row>\n        <Row type="flex" justify="space-around" align="middle">\n          <Col span={4}><p className="height-100">col-4</p></Col>\n          <Col span={4}><p className="height-50">col-4</p></Col>\n          <Col span={4}><p className="height-120">col-4</p></Col>\n          <Col span={4}><p className="height-80">col-4</p></Col>\n        </Row>\n        <Row type="flex" justify="space-between" align="bottom">\n          <Col span={4}><p className="height-100">col-4</p></Col>\n          <Col span={4}><p className="height-50">col-4</p></Col>\n          <Col span={4}><p className="height-120">col-4</p></Col>\n          <Col span={4}><p className="height-80">col-4</p></Col>\n        </Row>\n      </React.Fragment>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode)\n```\n\n\n\n## Flex \u6392\u5e8f\n\n\u901a\u8fc7 Flex \u5e03\u5c40\u7684 Order \u6765\u6539\u53d8\u5143\u7d20\u7684\u6392\u5e8f\u3002\n\n```jsx\nimport { Row, Col } from \'zarm-web\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Row type="flex">\n        <Col span={6} order={4}>1 col-order-4</Col>\n        <Col span={6} order={3}>2 col-order-3</Col>\n        <Col span={6} order={2}>3 col-order-2</Col>\n        <Col span={6} order={1}>4 col-order-1</Col>\n      </Row>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode)\n```\n\n\n\n## \u54cd\u5e94\u5f0f\u5e03\u5c40\n\n\u9884\u8bbe\u56db\u4e2a\u54cd\u5e94\u5c3a\u5bf8\uff1axs sm md lg\n\n```jsx\nimport { Row, Col } from \'zarm-web\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <Row>\n          <Col xs={2} sm={4} md={6} lg={8}>Col</Col>\n          <Col xs={20} sm={16} md={12} lg={8}>Col</Col>\n          <Col xs={2} sm={4} md={6} lg={8}>Col</Col>\n        </Row>\n      </React.Fragment>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode)\n```\n\n## API\n\nRow Attribute\n\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      | \u53ef\u9009\u503c       | \u9ed8\u8ba4\u503c   |\n|---------- |-------- |---------- |-------------  |-------- |\n| justify     | \u6a2a\u8f74\u5bf9\u9f50\u65b9\u5f0f   | start/end/center/space-between/space-around    | \u2014 | -   |\n| align     | \u7eb5\u8f74\u5bf9\u9f50\u65b9\u5f0f   | top/middle/bottom    | \u2014 | middle   |\n| gutter  | \u95f4\u9694    | string/number   | -  | 0   |\n| type  | \u5e03\u5c40\u6a21\u5f0f\uff0c\u53ef\u9009 flex\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e0b\u6709\u6548    | string   | -  | -   |\n\nCol Attribute\n\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      | \u53ef\u9009\u503c       | \u9ed8\u8ba4\u503c   |\n|---------- |-------- |---------- |-------------  |-------- |\n| offset | \u6805\u683c\u5de6\u4fa7\u7684\u95f4\u9694\u683c\u6570\uff0c\u95f4\u9694\u5185\u4e0d\u53ef\u4ee5\u6709\u6805\u683c | number | - | 0 |\n| order | \u6805\u683c\u987a\u5e8f\uff0cflex \u5e03\u5c40\u6a21\u5f0f\u4e0b\u6709\u6548 | number | - | 0 |\n| pull | \u6805\u683c\u5411\u5de6\u79fb\u52a8\u683c\u6570 | number | - | 0 |\n| push | \u6805\u683c\u5411\u53f3\u79fb\u52a8\u683c\u6570 | number | - | 0 |\n| span | \u6805\u683c\u5360\u4f4d\u683c\u6570 | number | - | 0 |\n| xs | \u54cd\u5e94\u5f0f\u6805\u683c | number | - | - |\n| sm | \u54cd\u5e94\u5f0f\u6805\u683c | number | - | - |\n| md | \u54cd\u5e94\u5f0f\u6805\u683c | number | - | - |\n| lg | \u54cd\u5e94\u5f0f\u6805\u683c | number | - | - |\n'}}]);
//# sourceMappingURL=17.c79b9e46.js.map