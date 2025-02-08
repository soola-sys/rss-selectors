import View from '../../view';
import ElementCreator from '../../../app/utils/element-creator';
import ButtonView from '../../../app/utils/button-creator';

const cssClasses = {
  PLATES: 'plates',
  HEADING: 'text',
};

const heading_title = 'Select the plates';

export default class PlatesView extends View {
  constructor() {
    const elementParams = {
      tagName: 'div',
      classNames: [cssClasses.PLATES],
    };
    super(elementParams);
    this.configureHeader();
  }
  configureHeader() {
    const elementHeader = new ElementCreator({
      tagName: 'h2',
      classNames: [cssClasses.HEADING],
      textContent: heading_title,
    });
    const helpBtn = new ButtonView();
    this.elementCreator.append(elementHeader);
    this.elementCreator.append(helpBtn.getHtmlElement());
  }
}
