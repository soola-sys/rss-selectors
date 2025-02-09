import View from '../../view';
import ElementCreator from '../../../app/utils/element-creator';
import ButtonView from '../../../app/utils/button-creator';
// import selectorsData from '../../../app/data/mocks';
import './plates.css';

const cssClasses = {
  PLATES: 'plates',
  HEADING: 'text',
  TABLE_WRAPPER: 'table-wrapper',
  TABLE: 'table',
  TABLE_EDGE: 'table-edge',
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
    this.configureTable();
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
  configureTable() {
    const elementTableWrap = new ElementCreator({
      tagName: 'div',
      classNames: [cssClasses.TABLE_WRAPPER],
    });
    const elementTable = new ElementCreator({
      tagName: 'div',
      classNames: [cssClasses.TABLE],
    });

    elementTableWrap.append(elementTable);
    elementTableWrap.append(new ElementCreator({ tagName: 'div', classNames: [cssClasses.TABLE_EDGE] }));
    this.elementCreator.append(elementTableWrap);
  }
}
