import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './UserLogo.module.css';
import { selectUserInfo } from '../../redux/user/selectors';
import { fetchUser } from '../../redux/user/operations';

const UserLogo = () => {
  const dispatch = useDispatch();
  
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
    avatarSrc = data.avatarUrl;
  } else if (data.email) {
    avatarText = data.email.charAt(0).toUpperCase();
    displayName = data.email;
  }

  return (
    <div className={css.wrapper}>
      <div className={css.infoWrapper}>
        {displayName && <span>{displayName}</span>}
        <div className={css.avatarText}>
          {avatarSrc ? (
            <img src={avatarSrc} alt="avatar" className={css.avatarImg} />
          ) : (
            <span className={css.spanName}>{avatarText}</span>
          )}
        </div>
      </div>
      <button type="button" className={css.btn} onClick={() => {}}>
        <svg className={css.icon}>
          <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#tick" />
        </svg>
      </button>
    </div>
  );
};

export default UserLogo;