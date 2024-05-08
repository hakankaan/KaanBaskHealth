'use client';
import { createContext, useState } from 'react';

type LayoutContextValue = {
  editModeEnabled: boolean;
  toggleEditMode: () => void;
};

export const LayoutContext = createContext<LayoutContextValue | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const toggleEditMode = () => {
    setEditModeEnabled((prev) => !prev);
  };

  return (
    <LayoutContext.Provider
      value={{
        editModeEnabled,
        toggleEditMode,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
