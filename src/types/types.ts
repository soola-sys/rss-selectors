export interface IParam {
  tagName: string;
  classNames: string[];
  textContent: string;
  parentNode?: HTMLElement;
}
export interface IElementCreator {
  append(child: Node): void;
  getNode(): HTMLElement;
  destroy(): void;
  addClass(className: string): void;
}
