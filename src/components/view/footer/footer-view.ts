import ElementCreator from '../../app/utils/element-creator';
const cssClasses = {
  wrapper: 'wrapper',
};

const text = 'Test text';

export default class FooterView {
  private elementCreator;
  constructor() {
    this.elementCreator = this.createView();
  }
  getHtmlElement() {
    return this.elementCreator.getNode();
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
