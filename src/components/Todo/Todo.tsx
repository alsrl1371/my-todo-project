import { TodoProps } from '@/common/types/TodoTypes';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const { text, status } = todo;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className='flex items-center justify-between m-10pxr text-text'>
      <input
        className='w-20pxr h-20pxr'
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className='flex-1 ml-10pxr' htmlFor='checkbox'>
        {text}
      </label>
      <button
        className='flex items-center justify-center transition-all bg-gray-300 p-5pxr rounded-xl w-26pxr h-26pxr hover:bg-accent'
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}
