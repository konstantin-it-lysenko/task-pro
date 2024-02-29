import { lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from 'assets/styles';
import { PrivateRoute, PublicRoute } from 'routes';
import SharedLayout from 'layouts/SharedLayout';

const WelcomePage = lazy(() => import('../../pages/WelcomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const ScreensPage = lazy(() => import('../../pages/ScreensPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster position="top-center" />

      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="auth">Auth</Link>
        </li>
        <li>
          <Link to="home">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="auth/:id"
          element={<PublicRoute component={<AuthPage />} redirectTo="/home" />}
        />

        <Route path="/home" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute component={<HomePage />} redirectTo={'/auth'} />
            }
          />
          <Route
            path="/home/:boardId"
            element={
              <PrivateRoute component={<ScreensPage />} redirectTo={'/auth'} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
