import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PropsType from './PropsType';

class Tab extends Component<PropsType, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    closable: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };

  static defaultProps = {
    prefixCls: 'zw-tabs',
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || props.defaultSelected,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if ('selected' in nextProps) {
      this.setState({
        selected: !!nextProps.selected,
      });
    }
  }

  render() {
    const { className, children, style, prefixCls } = this.props;
    const { selected } = this.state;

    const cls = classnames(`${prefixCls}-body-item`, className, {
      [`${prefixCls}-body-item--active`]: selected,
    });

    return (
      <div className={cls} style={style}>
        {children}
      </div>
    );
  }
}

export default Tab;