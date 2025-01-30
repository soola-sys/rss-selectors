import View from '../../view/view';
const cssClasses = {
  WRAPPER: 'wrapper',
};

export default class WrapperView extends View {
  constructor() {
    const elementParams = {
      tagName: 'div',
      classNames: [cssClasses.WRAPPER],
    };
    super(elementParams);
  }
}
