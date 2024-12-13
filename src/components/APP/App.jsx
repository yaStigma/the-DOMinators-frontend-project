
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
// import PrivateRoute from "./PrivateRoute";
// import RestrictedRoute from "./RestrictedRoute";


export default function App() {

  const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
  const SignupPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
  const SigninPage = lazy(() => import('../../pages/SignInPage/SignInPage'));
  // const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));  //исправить путь на верный
  return(
<Suspense fallback={null}>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
    <Route index element={<WelcomePage />} />
    <Route path="welcome" element={<WelcomePage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="signin" element={<SigninPage />} />
      {/* <Route path="home" element={ <HomePage/> } /> */}

      {/* <Route path="signup" element={<RestrictedRoute component={<SignupPage />} redirectTo="/home" />} /> */}
      {/* <Route path="signin" element={<RestrictedRoute component={<SigninPage />} redirectTo="/home" />} /> */}
      {/* <Route path="home" element={ <PrivateRoute component={<HomePage/>} redirectTo="/signin" /> } /> */}
      <Route path="*" element={<div>Page not found</div>} />
    </Route>
  </Routes>
</Suspense>
  )
};

