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
    <form className='flex items-center justify-center bg-darkmode' onSubmit={handleSubmit}>
      <input
        className='w-full border-2 border-gray-200 rounded-lg my-10pxr ml-10pxr p-5pxr'
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      ></input>
      <button className='text-xl rounded-lg m-10pxr bg-accent text-darkmode p-7pxr' type='submit'>
        Add
      </button>
    </form>
  );
}
