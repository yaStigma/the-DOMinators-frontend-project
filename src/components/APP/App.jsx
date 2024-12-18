import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../../components/SharedLayout/SharedLayout.jsx";
// import PrivateRoute from "./PrivateRoute";
// import RestrictedRoute from "./RestrictedRoute";
import Loader from "../Loader/Loader.jsx"


export default function App() {

  const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
  const SignupPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
  const SigninPage = lazy(() => import('../../pages/SignInPage/SignInPage'));
  // const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));  //исправить путь на верный
  const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
  return(
<Suspense fallback={<Loader/>}>
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
        </Route>
        <Route path="*"  element={<NotFoundPage />} />
  </Routes>
</Suspense>
  )
};

