import { useDispatch } from "react-redux";
import { signIn } from "../../redux/auth/operations";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthWrapper } from "../../components/AuthWrapper/AuthWrapper";
import {SendResetEmailModal} from "../../components/SendResetEmailModal/SendResetEmailModal";
import css from "./SignInPage.module.css";

const SigninPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        .min(8, "Password must be at least 6 characters")
        .max(64, "Password must be not more than 64 characters")
        .required("Password is required"),
    },
  ];

  const handleSignin = async (values) => {
    try {
      // Вызов API для авторизации
      const payload = {
        email: values.email,
        password: values.password,
      };
      await dispatch(signIn(payload));

      // navigate("/home");
    } catch (error) {
      console.error("Signin error:", error);
      alert("Signin failed. Please try again.");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              onClick: openModal, 
            },
          ]}
        />
      </AuthWrapper>

      {isModalOpen && <SendResetEmailModal onClose={closeModal} />}
    </div>
  );
};

export default SigninPage;
