
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
import { selectIsRefreshing, selectIsLoggedIn } from "../../redux/auth/selectors";


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Lazy-loaded pages
  const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
  const SignupPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
  const SigninPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
  const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
  const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

  useEffect(() => {
    const token = localStorage.getItem("persist:auth");
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }


return (
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
      {/* Application Routes */}
