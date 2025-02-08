import View from '../../view';

const cssClasses = {
  EDITOR: 'editor',
};

export default class EditorView extends View {
  constructor() {
    const elementParams = {
      tagName: 'div',
      classNames: [cssClasses.EDITOR],
    };
    super(elementParams);
  }
}
