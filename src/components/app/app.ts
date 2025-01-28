import ElementCreator from './utils/element-creator';
import IParam from '../../types/types';
const cssClasses = {
  wrapper: 'wrapper',
};

const text = 'Test text';

export default class App {
  constructor() {
    this.createView();
  }
  createView() {
    const textParam = {
      tagName: 'p',
      classNames: [cssClasses.wrapper],
      textContent: text,
    };
    const creator = new ElementCreator(textParam);
    return creator;
  }
}
