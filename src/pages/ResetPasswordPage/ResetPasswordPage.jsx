import { AuthForm } from "../../components/AuthForm/AuthForm";
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./ResetPasswordPage.module.css";

export const ResetPasswordPage = () => {
//   const navigate = useNavigate();

const fields = [
  {
    name: "password",
    type: "password",
    label: "New Password",
    placeholder: "New Password",
    validation: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
  },
  {
    name: "repeatPassword",
    type: "password",
    label: "Repeat Password",
    placeholder: "Repeat password",
    validation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Repeat Password is required"),
  },
];

  const handleReset = async (values) => {
    try {
      // Call backend API for signup
      console.log("Reset password values:", values);
    //   navigate("/signin"); 
    } catch (error) {
      console.error("Reset password error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={css.SignupPageWrapper}>
      
    <AuthWrapper>
    <AuthForm
      title="Reset Password"
      fields={fields}
      onSubmit={handleReset}
      navigationLinks={[
        {
          text: "Sign In",
        //   onClick: () => navigate("/signin"),
        },
      ]}
    />
    </AuthWrapper>
    </div>
  );
};

