import View from '../../view/view';
import './main.css';
const cssClasses = {
  MAIN: 'main',
};

const text = 'Test text';

export default class MainView extends View {
  constructor() {
    const elementParams = {
      tagName: 'main',
      classNames: [cssClasses.MAIN],
      textContent: text,
    };
    super(elementParams);
  }
}
