import { Dispatch, SetStateAction } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

interface HeaderProps {
  filters: string[];
  filter: string;
  onFilterChange: Dispatch<SetStateAction<string>>;
  dark: boolean;
  toggleDarkMode: () => void;
}

function Header({ filters, filter, onFilterChange, dark, toggleDarkMode }: HeaderProps) {
  return (
    <header
      className={`flex w-full justify-between items-center border-b-2 border-gray-200 ${
        dark ? 'bg-navy-800' : 'bg-darkmode'
      }`}
    >
      <button onClick={toggleDarkMode} className='text-2xl ml-20pxr'>
        {dark ? <HiSun className='text-yellow-400' /> : <HiMoon className='text-blue-400' />}
      </button>
      <ul className='flex w-full text-2xl font-medium'>
        {filters.map((value, index) => (
          <li
            className={`my-20pxr ml-20pxr text-accent ${
              value === filter
                ? dark
                  ? 'border-b-2 border-gray-200'
                  : 'border-b-2 border-black'
                : ''
            } ${dark ? 'active:text-purple-200' : ''}`}
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
