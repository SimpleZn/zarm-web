import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import StackManager from '../StackManager';
import Notification from '../Notification';

describe('StackManager', () => {
  const instance = new StackManager(Notification, 'notification');
  const containCls = `${Notification.defaultProps.prefixCls}-container`;
  const title = 'TestTitle';
  const content = 'this is a test notification!';

  it('instantiation correctly', () => {
    expect(instance.containerCls).toBe(containCls);
    expect(instance.component).toBe(Notification);
    expect(instance.componentName).toBe('notification');
  });

  it('open correctly', () => {
    const open1 = instance.open({ title, content });
    expect(typeof open1.close).toBe('function');
    expect(instance.notifyList.length).toBe(1);
    expect(document.body.querySelector(`.${containCls}`)).not.toBe(null);
    const item = instance.notifyList[0];
    expect(item.props.title).toBe(title);
    expect(item.props.content).toBe(content);
  });

  it('position correctly', () => {
    instance.open({ title, content, position: 'bottomLeft' });
    const item = instance.notifyList[0];
    expect(item.props.position).toBe('bottomLeft');
  });

  it('destroy correctly', () => {
    instance.destroy();
    expect(document.body.querySelector(`.${containCls}`)).toBe(null);
  });

  it('close correctly', () => {
    const instance2 = new StackManager(Notification, 'notification');
    const open1 = instance2.open({ title, content });
    expect(instance2.notifyList.length).toBe(1);
    open1.close();
    const item = instance2.notifyList[0];
    expect(item.ref.current.state.visible).toBe(false);
    instance2.destroy();
  });

  it('close all correctly', () => {
    const instance2 = new StackManager(Notification, 'notification');
    instance2.open({ title, content });
    instance2.open({ title, content });

    expect(instance2.notifyList.length).toBe(2);
    instance2.closeAll();

    instance2.notifyList.forEach((item) => {
      expect(item.ref.current.state.visible).toBe(false);
    });
  });

  it('auto close correctly', () => {
    const oldRender = ReactDOM.render;
    ReactDOM.render = jest.fn((coms) => {
      ReactDOM.render = oldRender;
      const wraper = mount(coms);
      wraper.mount();
    });

    jest.useFakeTimers();
    const instance2 = new StackManager(Notification, 'notification');
    const open1 = instance2.open({ title, content });

    expect(instance2.notifyList.length).toBe(1);
    jest.advanceTimersByTime(10000);
    expect(instance2.notifyList.length).toBe(0);
    // 走close的另一个分支， 提高代码覆盖率
    open1.close();
    // 走remove的另一个分支， 提高代码覆盖率
    instance2.remove('testkey', 'rightBottom');
  });

  it('open with key correctly', () => {
    jest.useFakeTimers();
    const instance2 = new StackManager(Notification, 'notification');
    const key = 'uniquekey';
    instance2.open({ title, content, key });
    expect(instance2.notifyList.length).toBe(1);
    instance2.close(key);
    jest.advanceTimersByTime(10000);
    expect(instance2.notifyList.length).toBe(0);
  });
});
