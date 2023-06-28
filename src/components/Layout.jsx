import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
