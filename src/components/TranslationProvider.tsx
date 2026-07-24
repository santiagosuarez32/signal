"use client";

import React, { createContext, useContext } from 'react';

type Dictionary = any;

const TranslationContext = createContext<{ dict: Dictionary; lang: string } | null>(null);

export const TranslationProvider = ({ children, dict, lang }: { children: React.ReactNode; dict: Dictionary; lang: string }) => {
  return (
    <TranslationContext.Provider value={{ dict, lang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
