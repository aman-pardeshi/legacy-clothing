import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<CollectionsOverviewContainer />} />
          <Route path={`:collectionId`} element={<CollectionPageContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ShopPage;
