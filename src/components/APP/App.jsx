import { lazy, Suspense} from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import Loader from "../Loader/Loader";
import { ToastContainer} from "react-toastify"; //добавила для всплывающих окон (Надя)
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { useDispatch, useSelector } from 'react-redux';  //добавила для обновления токена после перезагрузки (Надя)
import { useEffect } from 'react'; //добавила для обновления токена после перезагрузки (Надя)
import { refreshUser } from '../../redux/auth/operations'; //добавила для обновления токена после перезагрузки (Надя)
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function App() {

  const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
  const SignupPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
  const SigninPage = lazy(() => import('../../pages/SignInPage/SignInPage'));
  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

  const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
  
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem('persist:auth');
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);
  
  return isRefreshing ? (
    <p>Loading...</p>) : (
    <> 
    {/* добавила для всплывающих окон (Надя) */}
    <ToastContainer
    toastClassName="toast-custom"
    progressClassName="toast-custom-progress"
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover 
    theme="light"
    />
<Suspense fallback={<Loader/>}>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
    <Route index element={isLoggedIn? <HomePage/>:<WelcomePage />} />
    <Route path="welcome" element={<WelcomePage />} />
      {/* <Route path="signup" element={<SignupPage />} />
      <Route path="signin" element={<SigninPage />} /> */}
      {/* <Route path="home" element={ <HomePage/> } /> */}

      <Route path="signup" element={<RestrictedRoute component={<SignupPage />} redirectTo="/home" />} /> 
      <Route path="signin" element={<RestrictedRoute component={<SigninPage />} redirectTo="/home" />} />
       <Route path="home" element={ <PrivateRoute component={<HomePage/>} redirectTo="/signin" /> } />
        </Route>
        <Route path="*"  element={<NotFoundPage />} />
  </Routes>
</Suspense>
</>
  )
};

