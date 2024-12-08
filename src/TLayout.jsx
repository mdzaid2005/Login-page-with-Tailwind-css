
import React from 'react';
import { ComplexTopBar } from './TopBar';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ComplexTopBar />
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
