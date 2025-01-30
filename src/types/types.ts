export interface IParam {
  tagName: string;
  classNames: string[];
  textContent?: string;
  parentNode?: HTMLElement;
}
export interface IElementCreatorProps {
  append(child: Node): void;
  getNode(): HTMLElement;
  destroy(): void;
  addClass(className: string): void;
  appendChildren(children: Array<ChildNode>): void;
}
