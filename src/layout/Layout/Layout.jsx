import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'layout';
import { Loader } from 'components';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
        autoClose={2500}
        position="top-center"
        newestOnTop
        theme="colored"
      />
      <Footer />
    </div>
  );
};
