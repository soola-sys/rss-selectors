import { IParam } from '../../../../types/types';
import ElementCreator from '../../../app/utils/element-creator';
import View from '../../view';
import './editor.css';

const cssClasses = {
  EDITOR: 'editor',
  CSS_Viewer: 'css-viewer',
  CSS_HEADER: 'css-header',
  CSS_header_text: 'css-text',
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
    const cssHeader = new ElementCreator({
      tagName: 'div',
      classNames: [cssClasses.CSS_HEADER],
    });
    cssHeader.append(
      this.renderViewerHeader({
        tagName: 'p',
        textContent: 'CSS Editor',
        classNames: [cssClasses.CSS_header_text],
      }),
    );
    cssHeader.append(
      this.renderViewerHeader({
        tagName: 'p',
        textContent: 'style.css',
        classNames: [cssClasses.CSS_header_text],
      }),
    );
    cssViewer.append(cssHeader);
    this.elementCreator.append(cssViewer);
  }
  renderViewerHeader(obj: IParam) {
    const parapraph = new ElementCreator(obj);
    return parapraph.getNode();
  }
}
