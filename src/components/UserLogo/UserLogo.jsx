import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './UserLogo.module.css';
import { selectUserInfo } from '../../redux/user/selectors';
import { fetchUser } from '../../redux/user/operations';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';

const UserLogo = () => {
  const dispatch = useDispatch();
  const [open,setOpen]=useState(false)

  // Используем useEffect для загрузки данных
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userInfo = useSelector(selectUserInfo);

  // Проверяем состояние userInfo
  if (!userInfo) {
    return <div>Загрузка...</div>;  // Можно показать индикатор загрузки, если данные ещё не загружены
  }

  const data = userInfo.data || {};  // Если данных нет, используем пустой объект

  let avatarSrc = '';
  let avatarText = '';
  let displayName = '';

  // Логика для отображения аватара или текста
  if (data.avatarUrl) {
 avatarSrc = data.avatarUrl
 if (data.name) {
  displayName = data.name;
 } else {
  displayName = data.email
 }
  } else if (data.name) {
    avatarText = data.name.charAt(0).toUpperCase(); // Первая буква имени
    displayName = data.name; // Имя пользователя

  } else if (data.email) {
    avatarText = data.email.charAt(0).toUpperCase(); // Первая буква email
    displayName = data.email; // Email пользователя

  }

  const openDropdown = () => {
    setOpen(prev => !prev);
  };


  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        {displayName && <span className={css.avatarText}>{displayName}</span>}
        <div className={css.avatarText}>
          {avatarSrc ? (
            <img src={avatarSrc} alt="avatar" className={css.avatarImg} />
          ) : (
            <span className={css.spanName}>{avatarText}</span>
          )}
        </div>
      </div>
      <div className={css.headerActions}>

      <button type="button" className={css.btn} onClick={openDropdown}>
        <svg className={css.icon}>
          <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#tick" />
        </svg>
      </button>
        {open && <UserLogoModal  onClose={openDropdown} isOpen={open}/>}
      </div>
    </div>
  );
};

export default UserLogo;
