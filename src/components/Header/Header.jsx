import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
import Logo from 'components/Logo/Logo';
import UserAuth from 'components/UserAuth/UserAuth';
import UserLogo from 'components/UserLogo/UserLogo';
import css from './Header.module.css';
import { signIn} from '../../redux/auth/operations';
import { fetchUser } from '../../redux/user/operations';
import { selectIsLoggedIn, selectToken } from '../../redux/auth/selectors';


const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const accessToken = useSelector(selectToken);

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken && !isLogin) {
        try {
          await dispatch(fetchUser()).unwrap();
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    fetchUserData();
  }, [accessToken, isLogin, dispatch]);

  const handleLogin = async (credentials) => {
    try {
      await dispatch(signIn(credentials)).unwrap();
      await dispatch(fetchUser()).unwrap(); // Вызываем fetchUser вручную
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={css.HeaderDiv}>
      <Logo />
      {isLogin ? <UserLogo /> : <UserAuth onLogin={handleLogin} />}
    </div>
);
};

export default Header;
