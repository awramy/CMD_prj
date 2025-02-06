// contexts/UserContext.tsx
import React, { createContext, ReactNode } from 'react';
import userStore from '../store/userStore.ts'; // Убедитесь, что путь правильный

interface UserContextType {
  user: userStore;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const user = new userStore();

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};