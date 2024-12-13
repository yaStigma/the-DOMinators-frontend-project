import { AuthForm } from "../../components/AuthForm/AuthForm";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./SignInPage.module.css";

const SigninPage = () => {
const navigate = useNavigate();

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "E-mail",
      validation: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      validation: Yup.string().min(8, "Password must be at least 6 characters").max(64, "Password must be not more than 64 characters").required("Password is required"),
    },
  ];

  const handleSignin = async (values) => {
    try {
      // Call backend API for signin
      console.log("Signin values:", values);
    //   navigate("/home");
    } catch (error) {
      console.error("Signin error:", error);
      alert("Signin failed. Please try again.");
    }
  };

  return (
    <div className={css.SigninPageWrapper}>
      
    <AuthWrapper>
    <AuthForm
      title="Sign In"
      fields={fields}
      onSubmit={handleSignin}
      navigationLinks={[
        {
          text: "Sign Up",
        onClick: () => navigate("/signup"),
        },
        {
          text: "Forgot your password?",
        //   onClick: () => navigate("/forgot-password"),
        },
      ]}
    />
   </AuthWrapper>
</div>
  );
};
export default(SigninPage)   //додала експорт по дефолду для навігації (Таня)