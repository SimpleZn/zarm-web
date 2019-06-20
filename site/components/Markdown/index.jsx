import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import prism from 'prismjs';
import Demo from './Demo';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.components = new Map();
    this.nodeList = [];
    this.renderer = new marked.Renderer();
    this.renderer.table = (header, body) => {
      return `<table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table>`;
    };
  }

  componentDidMount() {
    this.renderDOM();
  }

  componentDidUpdate() {
    // this.renderDOM();
  }

  componentWillUnmount() {
    this.nodeList.forEach((element) => {
      ReactDOM.unmountComponentAtNode(element);
      element.parentNode.removeChild(element);
    });
    this.nodeList = [];
  }


  renderDOM() {
    // eslint-disable-next-line
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);
      this.nodeList.push(div);
      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
    prism.highlightAll();
  }

  render() {
    const { document } = this.props;

    if (typeof document === 'string') {
      this.components.clear();

      const html = marked(
        document
          .replace(/(```\s?jsx([^]+?)```)/g, (match, p1) => {
            const id = parseInt(Math.random() * 1e9, 10).toString(36);
            this.components.set(id, React.createElement(Demo, this.props, p1));
            return `<div id=${id}></div>`;
          }),
        {
          renderer: new marked.Renderer(),
        },
      );

      // const html = marked(document.replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => {
      //   const id = offset.toString(36);

      //   this.components.set(id, React.createElement(Demo, Object.assign({
      //     name: this.constructor.name.toLowerCase(),
      //   }, this.props), p1));

      //   return `<div id=${id}></div>`;
      // }), { renderer: this.renderer });

      return (
        // eslint-disable-next-line
        <div dangerouslySetInnerHTML={{
          __html: html,
        }}
        />
      );
    }

    return <span />;
  }
}