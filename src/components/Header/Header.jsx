import React from 'react';
import Logo from 'components/Logo/Logo';
import UserAuth from 'components/UserAuth/UserAuth';
import css from './Header.module.css'
const Header = () => {
  return (
    <div className={css.HeaderDiv}>
          <Logo />
          <UserAuth />
    </div>

  
  );
};

export default Header;