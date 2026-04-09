import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};
