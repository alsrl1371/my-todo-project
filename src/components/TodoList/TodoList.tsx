import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { TodoItem, filterProps } from '@/common/types/TodoTypes';
import { useDarkModeContext } from '../../context/DarkModeContext';

const initialTodos: TodoItem[] = [
  { id: '123', text: '장보기', status: 'active' },
  { id: '124', text: '공부하기', status: 'active' },
];
export default function TodoList({ filter }: filterProps) {
  const { darkMode } = useDarkModeContext();
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const handleAdd = (todo: TodoItem) => setTodos([...todos, todo]);
  const handleUpdate = (updated: TodoItem) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted: TodoItem) => setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  return (
    <section
      className={`flex flex-col h-full min-h-0 ${darkMode ? 'bg-navy-700' : 'bg-whitemode'}`}
    >
      <ul className='flex-grow overflow-y-auto border-b-2 border-gray-200 p-15pxr'>
        {filtered.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos: TodoItem[], filter: string) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
