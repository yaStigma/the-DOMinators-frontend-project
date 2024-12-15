import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {AuthWrapper} from "../../components/AuthWrapper/AuthWrapper";
import css from "./SignUpPage.module.css";

const SignupPage = () => {
const dispatch = useDispatch();
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
    validation: Yup.string()
      .min(8, "Password must be at least 6 characters").max(64, "Password must be not more than 64 characters")
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

  const handleSignup = async (values, event) => {
    try {
      // Call backend API for signup
      const payload = {
        email: values.email,
        password: values.password,
        repeatPassword: values.repeatPassword,
      };
      await dispatch(signUp(payload)); 

    // navigate("/home");
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
        onClick: () => navigate("/signin"),
        },
      ]}
    />
    </AuthWrapper>
    </div>
  );
};


export default (SignupPage);  //додала експорт по дефолду для навігації (Таня)