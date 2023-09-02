import React, { createContext, useContext, useState } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkModeContext must be used within a DarkModeProvider');
  }
  return context;
}

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const contextValue: DarkModeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
}
