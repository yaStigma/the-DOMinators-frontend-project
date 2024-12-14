import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './UserLogo.module.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
const UserLogo = () => {
  const data = useSelector(selectUser)
      const navigate = useNavigate();
      let name
      let avatarSrc
      if( data.src) {
     avatarSrc = data.src
      } else if( !data.src) {
        if(data.name) {
            avatarSrc = data.name.charAt(0).toUpperCase()
        } else {
            avatarSrc = data.email.charAt(0).toUpperCase()
        }
      } 
  return (
    <div className={css.wrapper}>
<button type='button'  className={css.btn} onClick={()=> { navigate("/signin")}}></button>
<div>{name}{avatarSrc ? <img src={avatarSrc} alt='avatar'></img> : <span className={css.spanName}>{name}</span>}</div>
</div>
  );
};
export default UserLogo