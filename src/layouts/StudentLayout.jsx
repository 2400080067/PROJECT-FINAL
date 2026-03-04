import React from 'react';
import Sidebar from '../components/Sidebar';

export const StudentLayout = ({ children }) => {
  return (
    <div className="flex min-h-[80vh] bg-white shadow-sm rounded-lg overflow-hidden">
      <aside className="w-64 bg-blue-50 p-4 hidden md:block">
        <Sidebar forRole="student" />
      </aside>
      <section className="flex-grow p-6">{children}</section>
    </div>
  );
};

export default StudentLayout;
