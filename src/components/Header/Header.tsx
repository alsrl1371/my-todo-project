import { useDarkModeContext } from '../../context/DarkModeContext';
import { Dispatch, SetStateAction } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

interface HeaderProps {
  filters: string[];
  filter: string;
  onFilterChange: Dispatch<SetStateAction<string>>;
}

function Header({ filters, filter, onFilterChange }: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <header
      className={`flex w-full justify-between items-center border-b-2 border-gray-200 ${
        darkMode ? 'bg-navy-800' : 'bg-darkmode'
      }`}
    >
      <button onClick={toggleDarkMode} className='text-2xl ml-20pxr'>
        {darkMode ? <HiSun className='text-yellow-400' /> : <HiMoon className='text-blue-400' />}
      </button>
      <ul className='flex w-full font-medium text-2xl'>
        {filters.map((value, index) => (
          <li
            className={`my-20pxr ml-20pxr text-accent ${
              value === filter
                ? darkMode
                  ? 'border-b-2 border-gray-200'
                  : 'border-b-2 border-black'
                : ''
            } ${darkMode ? 'active:text-purple-200' : ''}`}
            key={index}
          >
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
