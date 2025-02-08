import View from '../../view/view';
import './main.css';

const cssClasses = {
  MAIN: 'main',
};

export default class MainView extends View {
  constructor() {
    const elementParams = {
      tagName: 'main',
      classNames: [cssClasses.MAIN],
    };
    super(elementParams);
  }
}
