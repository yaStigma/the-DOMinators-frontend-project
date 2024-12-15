import React from 'react';
import css from './Loader.module.css';

export default function Loader({ children }) {
  return (
    <div className={css.loader}>
      <div className={css.spinner}></div>
      <p>{children}</p>
    </div>
  );
}
