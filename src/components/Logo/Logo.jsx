import React from 'react';
import css from './Logo.module.css'
const Logo = () => {
  return (
    <div className={css.main}>
      <svg class="icon icon-Logo">
      <use href="/the-DOMinators-frontend-project/welcomeIcons.svg#Logo" />
 </svg>


    <h1 className={css.logo}>Tracker
    of water</h1>
  </div>
  );
};

export default Logo;