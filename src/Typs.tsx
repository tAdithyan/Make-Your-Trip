export interface HeaderProps {
  item?: string;
  setItem: (value: string) => void | undefined;
  setNewItem?: (value: []) => void | undefined;
  handleBtnPress?: () => void;
  taken?:string[]
}
export interface ButtonProps {
  style?: string;
  buttonPress?: () => void;
  children?: React.ReactNode;
}
export interface ListProps {
  newitem: string[];
  handleDltButtonPress: (item: string, Deleteindex: number) => void;
  handleComleted:(item: string, Deleteindex: number) => void;
}
