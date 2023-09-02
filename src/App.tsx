import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import useDarkMode from './hooks/useDarkMode';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [dark, toggleDarkMode] = useDarkMode();
  return (
    <>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
        dark={dark}
        toggleDarkMode={toggleDarkMode}
      />
      <TodoList dark={dark} filter={filter} />
    </>
  );
}

export default App;
