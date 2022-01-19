import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import {
  CollectionItemContainer,
  BackgroundImage,
  AddButton,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemHandler = (cartItem) => dispatch(addItem(cartItem));

  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name} </NameContainer>
        <PriceContainer>₹{price} </PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemHandler(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
