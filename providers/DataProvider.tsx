"use client";
import React, { createContext, ReactNode, useState } from "react";

interface User {
  fullName: string;
  auth_input: string;
  role: string;
}

interface ContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const DataContext = createContext<ContextValue | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
