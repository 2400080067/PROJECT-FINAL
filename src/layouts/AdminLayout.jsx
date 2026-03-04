import React from 'react';
import Sidebar from '../components/Sidebar';

export const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-[80vh] bg-white shadow-sm rounded-lg overflow-hidden">
      <aside className="w-64 bg-green-50 p-4 hidden md:block">
        <Sidebar forRole="admin" />
      </aside>
      <section className="flex-grow p-6">{children}</section>
    </div>
  );
};

export default AdminLayout;
