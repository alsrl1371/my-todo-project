import { TodoProps } from '@/common/types/TodoTypes';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const { darkMode } = useDarkModeContext();
  const { text, status } = todo;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li
      className={`flex items-center justify-between m-10pxr ${
        darkMode ? 'text-gray-200' : 'text-text'
      }`}
    >
      <input
        className='w-20pxr h-20pxr'
        type='checkbox'
        id={todo.id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className='flex-1 ml-10pxr' htmlFor={todo.id}>
        {text}
      </label>
      <button
        className={`flex items-center justify-center transition-all bg-gray-300 p-5pxr rounded-xl w-26pxr h-26pxr hover:bg-accent ${
          darkMode ? 'bg-gray-800' : 'bg-gray-300'
        }`}
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}
