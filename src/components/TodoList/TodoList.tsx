import { useState } from 'react';

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
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
