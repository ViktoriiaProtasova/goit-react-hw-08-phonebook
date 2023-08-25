import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ResponsiveAppBar from 'components/AppBar/ResponsiveAppBar';
// import { ColorRing } from 'react-loader-spinner';
// import { LoaderWrapper } from '../components/commonCss.styled';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />

      <Suspense
      // fallback={
      //   <LoaderWrapper>
      //     <ColorRing
      //       visible={true}
      //       height="80"
      //       width="80"
      //       ariaLabel="blocks-loading"
      //       wrapperStyle={{}}
      //       wrapperClass="blocks-wrapper"
      //       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      //     />
      //   </LoaderWrapper>
      // }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
