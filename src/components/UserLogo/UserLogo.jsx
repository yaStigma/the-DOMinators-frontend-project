import React from 'react';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import css from './UserLogo.module.css';
// import { selectUserInfo } from '../../redux/user/selectors';
// import { fetchUser } from '../../redux/user/operations';

// const UserLogo = ({ userId }) => {
//   const dispatch = useDispatch();
//   const { user } = useSelector(selectUserInfo);

//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchUser(userId));
//     }
//   }, [dispatch, userId]);

//  
//   const { name, email, avatarUrl } = user.data;

//   let avatarSrc = '';
//   let avatarText = '';
//   let displayName = '';

//   if (avatarUrl) {
//     avatarSrc = avatarUrl;
//   } else if (name) {
//     avatarText = name.charAt(0).toUpperCase();
//     displayName = name;
//   } else if (email) {
//     avatarText = email.charAt(0).toUpperCase();
//     displayName = email;
//   }
// console.log(user.data);
//   return (
//     <div className={css.wrapper}>
//       <div className={css.infoWrapper}>
//         {displayName && <span>{displayName}</span>}
//         <div className={css.avatarText}>
//           {avatarSrc ? (
//             <img src={avatarSrc} alt="avatar" className={css.avatarImg} />
//           ) : (
//             <span className={css.spanName}>{avatarText}</span>
//           )}
//         </div>
//       </div>
//       <button type="button" className={css.btn} onClick={() => {}}>
//         <svg className={css.icon}>
//           <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#tick" />
//         </svg>
//       </button>
//     </div>
//   );
// };
const UserLogo = () => {
  // const data = useSelector(selectUser)
  // console.log(data)
      // let name = '';
      // let avatarSrc = '';
      // let avatarText = '';
  //     if( data.src  ) {
  //    avatarSrc = data.src
  //     } else if(data.name) {
  //  avatarText = data.name.toUpperCase()
  //           name = data.name
  //       }  else if(data.email) {
  //           avatarText = data.email.charAt(0).toUpperCase()
  //           name = data.email.charAt(0).toUpperCase()
        // }
      
  return (
    <div className={css.wrapper}>
 <div className={css.infoWrapper}>Evgen <div className={css.avatarText}><span>E</span></div> </div>
 <button type='button'  className={css.btn} onClick={()=> {}}><svg className={css.icon} >
      <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#tick" />
 </svg> </button>
{/* <div>{name} {avatarSrc ? <img src={avatarSrc} alt='avatar'></img> : <span className={css.spanName}>{avatarText}</span>}</div> */}
</div>
  );
};
export default UserLogo