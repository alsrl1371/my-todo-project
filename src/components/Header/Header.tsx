import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  filters: string[];
  filter: string;
  onFilterChange: Dispatch<SetStateAction<string>>;
}

function Header({ filters, filter, onFilterChange }: HeaderProps) {
  return (
    <header className='flex w-full justify-between items-center bg-darkmode border-b-2 border-gray-200'>
      <ul className='flex w-full font-medium text-2xl'>
        {filters.map((value, index) => (
          <li
            className={`my-20pxr ml-20pxr text-accent ${
              value === filter ? 'border-b-2 border-black' : ''
            } active:text-purple-200`}
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
