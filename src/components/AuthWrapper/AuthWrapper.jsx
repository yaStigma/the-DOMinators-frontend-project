import React from 'react';
import css from './AuthWrapper.module.css';

export const AuthWrapper = ({ children }) => {
  return <div className={css.AuthWrapper}>{children}</div>;
};
