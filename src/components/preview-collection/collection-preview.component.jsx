import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/shop/${title.toLowerCase()}`);
  }
  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={handleClick}>
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
