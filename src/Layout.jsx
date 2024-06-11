import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ResponsiveAppBar from './components/Navigation/Navigation';
import LinearIndeterminate from 'Loader';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Suspense fallback={<LinearIndeterminate />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
