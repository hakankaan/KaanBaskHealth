'use client';
import { createContext, useState } from 'react';

type LayoutContextValue = {
  isEditMode: boolean;
  enableEditMode: () => void;
  saveLayout: () => void;
  changeBreakPoint: (newBreakpoint: string) => void;
  breakPoint?: string;
};

export const LayoutContext = createContext<LayoutContextValue | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [breakPoint, setBreakPoint] = useState<string>();

  const enableEditMode = () => setIsEditMode(true);

  const saveLayout = () => setIsEditMode(false);

  const changeBreakPoint = (newBreakpoint: string) => {
    setBreakPoint(newBreakpoint);
  };
  return (
    <LayoutContext.Provider
      value={{
        isEditMode,
        enableEditMode,
        saveLayout,
        breakPoint,
        changeBreakPoint,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
