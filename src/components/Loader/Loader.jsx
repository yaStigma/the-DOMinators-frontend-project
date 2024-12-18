import React from 'react';
import css from './Loader.module.css';

const Loader = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  }}>
    <div className={css.spinner} />
  </div>
);

export default Loader;

