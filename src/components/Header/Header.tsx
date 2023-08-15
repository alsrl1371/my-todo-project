import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  filters: string[];
  filter: string;
  onFilterChange: Dispatch<SetStateAction<string>>;
}

function Header({ filters, onFilterChange }: HeaderProps) {
  return (
    <ul>
      {filters.map((value, index) => (
        <li key={index}>
          <button onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
  );
}

export default Header;
