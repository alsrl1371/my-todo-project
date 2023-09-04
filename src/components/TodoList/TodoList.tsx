import { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { TodoItem, filterProps } from '@/common/types/TodoTypes';

export default function TodoList({ dark, filter }: filterProps) {
  const [todos, setTodos] = useState<TodoItem[]>(() => readTodos());
  const handleAdd = (todo: TodoItem) => setTodos([...todos, todo]);
  const handleUpdate = (updated: TodoItem) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted: TodoItem) => setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={`flex flex-col h-full min-h-0 ${dark ? 'bg-navy-700' : 'bg-whitemode'}`}>
      <ul className='flex-grow overflow-y-auto border-b-2 border-gray-200 max-h-0 p-15pxr'>
        {filtered.map((item) => (
          <Todo
            dark={dark}
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo dark={dark} onAdd={handleAdd} />
    </section>
  );
}

function readTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos: TodoItem[], filter: string) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
