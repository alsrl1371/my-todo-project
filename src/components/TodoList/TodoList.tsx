import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { TodoItem } from '@/common/types/TodoTypes';

const initialTodos: TodoItem[] = [
  { id: '123', text: '장보기', status: 'active' },
  { id: '124', text: '공부하기', status: 'active' },
];
export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const handleAdd = (todo: TodoItem) => setTodos([...todos, todo]);
  const handleUpdate = (updated: TodoItem) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted: TodoItem) => setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
