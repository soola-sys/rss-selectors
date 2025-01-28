export default interface IParam {
  tagName: keyof HTMLElementTagNameMap;
  classNames: string[];
  textContent: string;
  parentNode?: HTMLElement;
}
export default interface IElementCreator {
  append(child: Node): void;
  getNode(): HTMLElement;
  destroy(): void;
  addClass(className: string): void;
}
