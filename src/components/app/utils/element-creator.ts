import { IParam } from '../../../types/types';
import { IElementCreatorProps } from '../../../types/types';

export default class ElementCreator implements IElementCreatorProps {
  private node: HTMLElement;
  constructor({ tagName = 'div', classNames = [], textContent = '', parentNode }: IParam) {
    this.node = document.createElement(tagName);
    this.node.classList.add(...classNames);
    this.node.textContent = textContent;
    if (parentNode) {
      parentNode.append(this.node);
    }
  }

  append(child: ElementCreator | Node): void {
    if (child instanceof ElementCreator) {
      this.node.appendChild(child.getNode());
    } else {
      this.node.appendChild(child);
    }
  }
  getNode(): HTMLElement {
    return this.node;
  }
  destroy(): void {
    this.node.remove();
  }
  addClass(className: string) {
    this.node.classList.add(className);
  }
}
