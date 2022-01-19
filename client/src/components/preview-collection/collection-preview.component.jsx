import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';
const CollectionPreview = ({ title, items }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/shop/${title.toLowerCase()}`);
  }
  return (
    <CollectionPreviewContainer className='collection-preview'>
      <TitleContainer className='title' onClick={handleClick}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
