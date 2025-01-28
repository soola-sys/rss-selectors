import ElementCreator from './utils/element-creator';
const cssClasses = {
  wrapper: 'wrapper',
};

const text = 'Test text';

export default class App {
  constructor() {
    this.start();
  }
  start() {
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
