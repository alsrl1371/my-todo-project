export interface TodoItem {
  id: string;
  text: string;
  status: string;
}

export interface TodoProps {
  todo: TodoItem;
  onUpdate: (updated: TodoItem) => void;
  onDelete: (deleted: TodoItem) => void;
}

export interface filterProps {
  filter: string;
}
