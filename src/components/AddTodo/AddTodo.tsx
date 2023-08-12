import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  text: string;
  status: string;
}

interface AddTodoProps {
  onAdd: (todo: Todo) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add Todo' value={text} onChange={handleChange}></input>
      <button type='submit'>Add</button>
    </form>
  );
}
