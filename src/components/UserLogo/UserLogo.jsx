import React from 'react';

import css from './UserLogo.module.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
const UserLogo = () => {
  const data = useSelector(selectUser)
  console.log(data)
  //     let name = '';
  //     let avatarSrc = '';
  //     let avatarText = '';
  //     if( data.src  ) {
  //    avatarSrc = data.src
  //     } else if(data.name) {
  //  avatarText = data.name.toUpperCase()
  //           name = data.name
  //       }  else if(data.email) {
  //           avatarText = data.email.charAt(0).toUpperCase()
  //           name = data.email
  //       }
      
  return (
    <div className={css.wrapper}>
 {/* <div className={css.infoWrapper}>Evgen <div className={css.avatarText}><span>E</span></div> </div>
 <button type='button'  className={css.btn} onClick={()=> {}}><svg className={css.icon} >
      <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#tick" />
 </svg> </button> */}


 
{/* <div className={css.infoWrapper}>{name} {avatarSrc ? <img src={avatarSrc} alt='avatar'></img> : <span className={css.avatarText}>{avatarText}</span>}</div>
<button type='button'  className={css.btn} onClick={()=> {}}><svg className={css.icon} >
      <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#tick" />
 </svg> </button>  */}
</div>
  );
};
export default UserLogo