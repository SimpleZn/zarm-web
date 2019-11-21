(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{638:function(n,o,r){"use strict";r.r(o),o.default="# Icon \u56fe\u6807\n\n\n\n## \u57fa\u672c\u7528\u6cd5\n```jsx\nimport { Icon } from 'zarm-web';\n\nconst ICONS = [\n  'add', 'add-round', 'add-round-fill', \n  'minus', 'minus-round', 'minus-round-fill',\n  'arrow-top', 'arrow-bottom', 'arrow-left', 'arrow-right',\n  'info-round', 'info-round-fill',\n  'warning-round', 'warning-round-fill',\n  'right', 'right-round', 'right-round-fill',\n  'wrong', 'wrong-round', 'wrong-round-fill',\n  'question-round', 'question-round-fill',\n  'required', 'broadcast', 'deletekey', 'keyboard', 'search', 'date', 'time',\n];\n\nReactDOM.render(\n  <div className=\"grid\">\n    {ICONS.sort().map((iconType) => {\n      return (\n        <div className=\"grid-column\" key={iconType}>\n          <Icon type={iconType} theme=\"primary\" size=\"lg\" />\n          <span>{iconType}</span>\n        </div>);\n    })}\n  </div>\n, mountNode);\n```\n\n\n\n## \u4e3b\u9898\n```jsx\nimport { Icon } from 'zarm-web';\n\nReactDOM.render(\n  <div className=\"grid\">\n    <div className=\"grid-column\">\n      <Icon type=\"warning-round\" theme=\"warning\" />\n      <span>warning</span>\n    </div>\n    <div className=\"grid-column\">\n      <Icon type=\"wrong-round\" theme=\"danger\" />\n      <span>danger</span>\n    </div>\n    <div className=\"grid-column\">\n      <Icon type=\"info-round\" style={{ color: '#1890ff' }}/>\n      <span>custom color</span>\n    </div>\n  </div>\n, mountNode);\n```\n\n\n\n## \u5c3a\u5bf8\n```jsx\nimport { Icon } from 'zarm-web';\n\nReactDOM.render(\n  <div className=\"grid\">\n    <div className=\"grid-column\">\n        <Icon type=\"search\" theme=\"primary\" size=\"sm\" />\n        <span>sm</span>\n    </div>\n    <div className=\"grid-column\">\n        <Icon type=\"search\" theme=\"primary\" />\n        <span>md</span>\n    </div>\n    <div className=\"grid-column\">\n        <Icon type=\"search\" theme=\"primary\" size=\"lg\" />\n        <span>lg</span>\n    </div>\n  </div>\n, mountNode)\n```\n\n## \u81ea\u5b9a\u4e49 Iconfont \u56fe\u6807\n\n\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a createFromIconfont \u65b9\u6cd5\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u8c03\u7528\u5728 [iconfont.cn](iconfont.cn) \u4e0a\u81ea\u884c\u7ba1\u7406\u7684\u56fe\u6807\u3002\n\n\u5176\u672c\u8d28\u4e0a\u662f\u7ec4\u4ef6\u5728\u6e32\u67d3\u524d\u4f1a\u81ea\u52a8\u5f15\u5165 iconfont.cn \u9879\u76ee\u4e2d\u7684\u56fe\u6807\u7b26\u53f7\u96c6\uff0c\u5e76\u4e14\u521b\u5efa\u4e86\u4e00\u4e2a `<use>` \u6807\u7b7e\u6765\u6e32\u67d3\u56fe\u6807\u7684\u7ec4\u4ef6\u3002\n\n\u8be6\u89c1 [iconfont.cn \u4f7f\u7528\u5e2e\u52a9](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code) \u67e5\u770b\u5982\u4f55\u751f\u6210symbol\u4ee3\u7801\u7684 js \u5730\u5740\u3002\n\n```jsx\nimport { Icon } from 'zarm-web';\n\nconst MyIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_4p9b5skcr79.js'); // generated by iconfont.cn\n\nReactDOM.render(\n  <div className=\"grid\">\n    <div className=\"grid-column\">\n        <MyIcon type=\"home\" theme=\"primary\" />\n        <span>home</span>\n    </div>\n    <div className=\"grid-column\">\n        <MyIcon type=\"user\" theme=\"primary\" />\n        <span>user</span>\n    </div>\n  </div>\n, mountNode);\n```\n\n## \u81ea\u5b9a\u4e49 SVG \u56fe\u6807\n\n\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e [svgr](https://github.com/smooth-code/svgr) \u6765\u5c06 svg \u56fe\u6807\u4f5c\u4e3a React \u7ec4\u4ef6\u5bfc\u5165\u3002\n\n\u672c\u793a\u4f8b\u4ee5 webpack \u4e3a\u53c2\u8003\uff0c\u4f7f\u7528 [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) \u6765\u5b9e\u73b0\uff0c\u5176\u4ed6\u5b9e\u73b0\u65b9\u5f0f\u8bf7\u53c2\u9605 [svgr \u6587\u6863](https://www.smooth-code.com/open-source/svgr/docs/getting-started/)\u3002\n\n```js\n// webpack.config.js\n{\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  issuer: {\n    test: /\\.jsx?$/,\n  },\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n},\n```\n```jsx\nimport { Icon } from 'zarm-web';\nimport { ReactComponent as YourSvg } from 'path/to/yourSvg.svg'; // path to your '*.svg' file.\n\nReactDOM.render(<Icon component={YourSvg} />, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'default' | \u4e3b\u9898\uff0c\u53ef\u9009\u503c `default`\u3001`primary`\u3001`success`\u3001`warning`\u3001`danger` |\n| size | string | 'md' | \u5927\u5c0f\uff0c\u53ef\u9009\u503c `sm`\u3001`md`\u3001`lg` |\n| type | string | - | \u56fe\u6807\u7c7b\u578b\uff0c\u53ef\u9009\u503c `wrong-round`\u3001`wrong-round-fill`\u3001`wrong`\u3001`warning-round`\u3001`warning-round-fill`\u3001`time`\u3001`keyboard`\u3001`deletekey`\u3001`search`\u3001`required`\u3001`right-round`\u3001`right-round-fill`\u3001`right`\u3001`question-round`\u3001`info-round`\u3001`info-round-fill`\u3001`minus`\u3001`broadcast`\u3001`add`\u3001`arrow-right`\u3001`arrow-left`\u3001`arrow-bottom`\u3001`arrow-top`\u3001`date`|\n| component | React.ComponentType&lt;React.SVGProps&lt;SVGSVGElement&gt;&gt; | - | \u672c\u5730svg\u6587\u4ef6\uff0c\u9700\u914d\u5408viewBox\u4f7f\u7528 |\n| viewBox | string | '0 0 32 32' | \u81ea\u5b9a\u4e49 SVG \u56fe\u6807\u65f6\uff0c\u7528\u6765\u8bbe\u7f6e\u753b\u5e03\u7684\u8d77\u59cb\u5750\u6807\u53ca\u5927\u5c0f |\n"}}]);
//# sourceMappingURL=18.7b54f94b.js.map