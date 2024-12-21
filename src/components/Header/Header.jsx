import React from 'react';
import {  useSelector } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
import Logo from 'components/Logo/Logo';
import UserAuth from 'components/UserAuth/UserAuth';
import UserLogo from 'components/UserLogo/UserLogo';
import css from './Header.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


const Header = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div className={css.HeaderDiv}>
      <Logo />
      {isLogin ? <UserLogo /> : <UserAuth  />}
    </div>
);
};

export default Header;
