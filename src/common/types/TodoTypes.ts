export interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export interface TodoProps {
  dark: boolean;
  todo: TodoItem;
  onUpdate: (updated: TodoItem) => void;
  onDelete: (deleted: TodoItem) => void;
}

export interface filterProps {
  dark: boolean;
  filter: string;
}
