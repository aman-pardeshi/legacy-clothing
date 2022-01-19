import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const dispatch = useDispatch();
  const signOutStartHandler = () => dispatch(signOutStart());

  const location = useLocation();
  return (
    <HeaderContainer>
      <LogoContainer to='/' className='logo-container'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer className='options'>
        {location.pathname === '/shop' ? (
          <OptionLink to='/' className='option'>
            HOME PAGE
          </OptionLink>
        ) : (
          <OptionLink to='/shop' className='option'>
            SHOP
          </OptionLink>
        )}

        <OptionLink to='/contact' className='option'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' className='option' onClick={signOutStartHandler}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin' className='option'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
