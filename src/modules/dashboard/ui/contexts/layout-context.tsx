'use client';
import { createContext, useState } from 'react';

type LayoutContextValue = {
  isEditMode: boolean;
  enableEditMode: () => void;
  saveLayout: () => void;
};

export const LayoutContext = createContext<LayoutContextValue | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const enableEditMode = () => setIsEditMode(true);

  const saveLayout = () => setIsEditMode(false);

  return (
    <LayoutContext.Provider
      value={{
        isEditMode,
        enableEditMode,
        saveLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
