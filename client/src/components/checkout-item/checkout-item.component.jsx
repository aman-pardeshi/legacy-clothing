import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const clearItem = (item) => dispatch(clearItemFromCart(item));
  const addItemHandler = (item) => dispatch(addItem(item));
  const removeItemHandler = (item) => dispatch(removeItem(item));

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemHandler(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemHandler(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>₹{price}</TextContainer>
      <RemoveButtonContainer
        className='remove-button'
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
