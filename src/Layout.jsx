import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ResponsiveAppBar from 'components/AppBar/ResponsiveAppBar';
import CircularIndeterminate from 'Loader';
// import { ColorRing } from 'react-loader-spinner';
// import { LoaderWrapper } from '../components/commonCss.styled';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />

      <Suspense fallback={<CircularIndeterminate />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
