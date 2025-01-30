import MainView from '../../components/view/main/main-view';
import WrapperView from '../../components/view/wrapper/wrapper';
import AsideView from '../../components/view/aside/aside-view';
export default class App {
  constructor() {
    this.createView();
  }
  createView() {
    const wrapper = new WrapperView();
    const mainView = new MainView();
    const aside = new AsideView();
    wrapper.getHtmlElement().append(mainView.getHtmlElement(), aside.getHtmlElement());
    document.body.append(wrapper.getHtmlElement());
  }
}
