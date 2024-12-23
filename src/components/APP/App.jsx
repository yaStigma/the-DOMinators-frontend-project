
import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SharedLayout from "../SharedLayout/SharedLayout";
import Loader from "../Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

import { refreshUser } from "../../redux/auth/operations";
import {  selectIsLoggedIn } from "../../redux/auth/selectors"; //selectIsRefreshing,
import { selectLoader } from "../../redux/loader/selectors";
import { showLoader, hideLoader } from "../../redux/loader/slice";

export default function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectLoader)
  // Lazy-loaded pages
  const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
  const SignupPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
  const SigninPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
  const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
  const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

  useEffect(() => {
    const token = localStorage.getItem("persist:auth");
    if (token) {
      dispatch(showLoader()); // Показати лоадер
      dispatch(refreshUser())
      .finally(() => {
        dispatch(hideLoader()); // Приховати лоадер після завершення запиту
      });
      }
  }, [dispatch]);

  // if (isRefreshing) {
  //   return <Loader/>;
  // }


return (
  <>
{isLoading && <Loader />}
    {/* добавила для всплывающих окон (Надя) */}
    <ToastContainer
      toastClassName="toast-custom"
      progressClassName="toast-custom-progress"
      position="top-right"
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
      {/* Application Routes */}
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={isLoggedIn ? <HomePage /> : <WelcomePage />} />
            <Route
              path="signup"
              element={<RestrictedRoute component={<SignupPage />} redirectTo="/home" />}
            />
            <Route
              path="signin"
              element={<RestrictedRoute component={<SigninPage />} redirectTo="/home" />}
            />
            <Route
              path="home"
              element={<PrivateRoute component={<HomePage />} redirectTo="/signin" />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}