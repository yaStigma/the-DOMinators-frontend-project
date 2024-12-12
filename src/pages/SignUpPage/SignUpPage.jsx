import { AuthForm } from "../../components/AuthForm/AuthForm";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./SignupPage.module.css";

export const SignupPage = () => {
//   const navigate = useNavigate();

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
    validation: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
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

  const handleSignup = async (values) => {
    try {
      // Call backend API for signup
      console.log("Signup values:", values);
    //   navigate("/signin"); 
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className={css.SignupPageWrapper}>
      
    <AuthWrapper>
    <AuthForm
      title="Sign Up"
      fields={fields}
      onSubmit={handleSignup}
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
