import View from '../../view/view';
const cssClasses = {
  BUTTON: 'help',
};
function testAlert() {
  alert('hello');
}

export default class ButtonView extends View {
  constructor() {
    const elementParams = {
      tagName: 'button',
      classNames: [cssClasses.BUTTON],
      textContent: "Help,I'm stuck!",
      callback: testAlert,
    };
    super(elementParams);
  }
}
