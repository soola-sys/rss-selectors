import { IParam } from '../../../../types/types';
import ElementCreator from '../../../app/utils/element-creator';
import View from '../../view';
import './editor.css';

const cssClasses = {
  EDITOR: 'editor',
  CSS_Viewer: 'css-viewer',
  CSS_HEADER: 'css-header',
  CSS_header_text: 'css-text',
  CSS_MAIN: 'css-main',
  CSS_UL_LIST: 'css-list',
  HTML_Viewer: 'html-viewer',
  HTML_HEADER: 'html-header',
  HTML_header_text: 'html-text',
};

export default class EditorView extends View {
  constructor() {
    const elementParams = {
      tagName: 'div',
      classNames: [cssClasses.EDITOR],
    };
    super(elementParams);
    this.renderCssViewer();
  }
  renderCssViewer() {
    const cssViewer = new ElementCreator({
      tagName: 'div',
      classNames: [cssClasses.CSS_Viewer],
    });
    const cssHeaderResult = this.appendCssViewerHeader({
      tagName: 'div',
      classNames: [cssClasses.CSS_HEADER],
    });
    const cssHeaderMainResult = this.appendCssViewerMain({
      tagName: 'div',
      classNames: [cssClasses.CSS_MAIN],
    });

    cssViewer.append(cssHeaderResult);
    cssViewer.append(cssHeaderMainResult);
    this.elementCreator.append(cssViewer);
  }
  renderElement(obj: IParam) {
    const parapraph = new ElementCreator(obj);
    return parapraph.getNode();
  }

  appendCssViewerHeader(obj: IParam) {
    const cssHeader = new ElementCreator(obj);
    cssHeader.append(
      this.renderElement({
        tagName: 'p',
        textContent: 'CSS Editor',
        classNames: [cssClasses.CSS_header_text],
      }),
    );
    cssHeader.append(
      this.renderElement({
        tagName: 'p',
        textContent: 'style.css',
        classNames: [cssClasses.CSS_header_text],
      }),
    );
    return cssHeader;
  }
  appendCssViewerMain(obj: IParam) {
    const cssMain = new ElementCreator(obj);
    const cssUlList = this.renderElement({
      tagName: 'ul',
      classNames: [cssClasses.CSS_UL_LIST],
    });
    for (let i = 1; i <= 12; i++) {
      const li = new ElementCreator({
        tagName: 'li',
        textContent: `${i}`,
      });
      cssUlList.append(li.getNode());
    }
    cssMain.append(cssUlList);
    return cssMain;
  }
}
