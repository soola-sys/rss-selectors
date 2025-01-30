import ElementCreator from '../../components/app/utils/element-creator';
import { IParam } from '../../types/types';
export default class View {
  private elementCreator;
  constructor(params: IParam) {
    this.elementCreator = this.createView(params);
  }
  getHtmlElement(): HTMLElement {
    return this.elementCreator.getNode();
  }
  createView(params: IParam): ElementCreator {
    const elementParams = {
      tagName: params.tagName,
      classNames: params.classNames,
      textContent: params.textContent,
    };
    const elementCreator = new ElementCreator(elementParams);
    return elementCreator;
  }
}
