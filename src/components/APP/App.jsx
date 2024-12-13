import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from'./App.module.css';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage.jsx'))

const App = () => {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Suspense>
    </div >
  );
};

export default App;
