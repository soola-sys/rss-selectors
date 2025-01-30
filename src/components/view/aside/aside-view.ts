import View from '../../view/view';
const cssClasses = {
  ASIDE: 'sidebar',
};

export default class AsideView extends View {
  constructor() {
    const elementParams = {
      tagName: 'aside',
      classNames: [cssClasses.ASIDE],
    };
    super(elementParams);
  }
}
