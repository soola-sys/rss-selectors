export interface IParam {
  tagName: string;
  classNames: string[];
  textContent?: string;
  parentNode?: HTMLElement;
  callback?(e: Event): void;
}
export interface IElementCreatorProps {
  append(child: Node): void;
  getNode(): HTMLElement;
  destroy(): void;
  addClass(className: string): void;
  appendChildren(children: Array<ChildNode>): void;
}

export interface ISelectorMockProps {
  level: string;
  title: string;
  syntax: string;
  correctSelector: string;
  isChosen: boolean;
  useHelp: boolean;
  isCompleted: boolean;
  tableElement: object[];
}
