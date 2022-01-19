import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemCount);
  const dispatch = useDispatch();
  const togglecartHiddenHandler = () => dispatch(toggleCartHidden());

  return (
    <CartContainer onClick={togglecartHiddenHandler}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
