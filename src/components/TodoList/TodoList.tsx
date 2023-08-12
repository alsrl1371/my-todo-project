import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

interface Todo {
  id: string;
  text: string;
  status: string;
}

const initialTodos: Todo[] = [
  { id: '123', text: '장보기', status: 'active' },
  { id: '124', text: '공부하기', status: 'active' },
];
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const handleAdd = (todo: Todo) => setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
