import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './UserAuth.module.css';
const UserAuth = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/signin" className={css.Link}>
        <button type="button" className={css.btn}>
          Sign in
        </button>
        </Link>
        <div className={css.icon}>
        <Link to="/signin" className={css.Link}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_139_386)">
              <circle cx="12" cy="12" r="11.5" stroke="#2F2F2F" />
              <path
                d="M15.0004 7.07692C15.0004 7.89297 14.6843 8.6756 14.1216 9.25263C13.5589 9.82967 12.7958 10.1538 12 10.1538C11.2042 10.1538 10.4411 9.82967 9.8784 9.25263C9.31571 8.6756 8.9996 7.89297 8.9996 7.07692C8.9996 6.26087 9.31571 5.47824 9.8784 4.90121C10.4411 4.32417 11.2042 4 12 4C12.7958 4 13.5589 4.32417 14.1216 4.90121C14.6843 5.47824 15.0004 6.26087 15.0004 7.07692ZM6 18.6609C6.02571 17.0464 6.66916 15.507 7.79158 14.3746C8.914 13.2422 10.4255 12.6076 12 12.6076C13.5745 12.6076 15.086 13.2422 16.2084 14.3746C17.3308 15.507 17.9743 17.0464 18 18.6609C16.1177 19.5461 14.0708 20.0029 12 20C9.85891 20 7.82664 19.5208 6 18.6609Z"
                stroke="#2F2F2F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_139_386">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </Link>
        </div>
     
    </div>
  );

  //       const navigate = useNavigate();
  //   return (
  //     <div className={css.wrapper}>
  // <button type='button'  className={css.btn} onClick={()=> { navigate("/signin")}}>Sign in</button>
  // <div className={css.icon}>
  // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <g clip-path="url(#clip0_139_386)">
  //     <circle cx="12" cy="12" r="11.5" stroke="#2F2F2F" />
  //     <path d="M15.0004 7.07692C15.0004 7.89297 14.6843 8.6756 14.1216 9.25263C13.5589 9.82967 12.7958 10.1538 12 10.1538C11.2042 10.1538 10.4411 9.82967 9.8784 9.25263C9.31571 8.6756 8.9996 7.89297 8.9996 7.07692C8.9996 6.26087 9.31571 5.47824 9.8784 4.90121C10.4411 4.32417 11.2042 4 12 4C12.7958 4 13.5589 4.32417 14.1216 4.90121C14.6843 5.47824 15.0004 6.26087 15.0004 7.07692ZM6 18.6609C6.02571 17.0464 6.66916 15.507 7.79158 14.3746C8.914 13.2422 10.4255 12.6076 12 12.6076C13.5745 12.6076 15.086 13.2422 16.2084 14.3746C17.3308 15.507 17.9743 17.0464 18 18.6609C16.1177 19.5461 14.0708 20.0029 12 20C9.85891 20 7.82664 19.5208 6 18.6609Z" stroke="#2F2F2F" stroke-linecap="round" stroke-linejoin="round" />
  //   </g>
  //   <defs>
  //     <clipPath id="clip0_139_386">
  //       <rect width="24" height="24" fill="white" />
  //     </clipPath>
  //   </defs>
  // </svg>
  // </div>
  // </div>
  //   );
};
export default UserAuth;
