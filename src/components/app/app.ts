import MainView from '../../components/view/main/main-view';
import EditorView from '../../components/view/main/editor/editor-view';
import PlatesView from '../../components/view/main/plates/plates-view';
import WrapperView from '../../components/view/wrapper/wrapper';
import AsideView from '../../components/view/aside/aside-view';

export class App {
  constructor() {
    this.createView();
  }
  createView() {
    const wrapper = new WrapperView();
    const mainView = new MainView();
    const aside = new AsideView();

    const elementPlates = new PlatesView();
    const editor = new EditorView();
    mainView.getHtmlElement().append(elementPlates.getHtmlElement(), editor.getHtmlElement());

    wrapper.getHtmlElement().append(mainView.getHtmlElement(), aside.getHtmlElement());
    document.body.append(wrapper.getHtmlElement());
  }
}
