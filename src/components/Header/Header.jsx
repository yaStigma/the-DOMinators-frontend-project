import React from 'react';
import Logo from 'components/Logo/Logo';
import UserAuth from 'components/UserAuth/UserAuth';
import css from './Header.module.css'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserLogo from 'components/UserLogo/UserLogo';
const Header = () => {
  const isLogin = useSelector(selectIsLoggedIn)
  console.log(isLogin);
  return (
    <div className={css.HeaderDiv}>
          <Logo />
          {isLogin ? <UserLogo /> : <UserAuth />}
          
    </div>

  
  );
};

export default Header;