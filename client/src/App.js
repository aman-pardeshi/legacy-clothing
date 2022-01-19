import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles';

// import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-sign-up/sign-in-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const MenuItem = lazy(() =>
  import('./components/menu-item/menu-item.component')
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop/*' element={<ShopPage />}>
              <Route path='shop/:id' element={<MenuItem />} />
            </Route>
            <Route
              path='/signin'
              element={
                currentUser ? <Navigate to='/' /> : <SignInAndSignUpPage />
              }
            />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
