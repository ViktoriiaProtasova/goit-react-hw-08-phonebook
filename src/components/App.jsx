// import { fetchContacts } from 'redux/operations';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import Layout from '../Layout';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const HomePage = lazy(() => import('pages/HomePage/HomePage'));

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
