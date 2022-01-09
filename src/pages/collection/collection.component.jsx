import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const CollectionPage = ({ collections }) => {
  const params = useParams();
  const sectionName = params.collectionId;

  function choosingItemsOfSection() {
    switch (sectionName) {
      case 'womens':
        return collections[0].items;
      case 'mens':
        return collections[2].items;
      case 'hats':
        return collections[1].items;
      case 'jackets':
        return collections[4].items;
      case 'sneakers':
        return collections[3].items;
      default:
        break;
    }
  }
  return (
    <div className='collection-page'>
      <h2 className='title'>{sectionName.toUpperCase()}</h2>
      <div className='items'>
        {choosingItemsOfSection().map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionPage);
