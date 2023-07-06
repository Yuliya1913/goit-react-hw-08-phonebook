import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { AppBar } from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Toaster />
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
