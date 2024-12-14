import React from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import * as Yup from 'yup'; 
import { useDispatch } from 'react-redux'; 
import { sendResetPasswordEmail } from '../../redux/auth/operations';
import css from "./SendResetEmailModal.module.css";

export const SendResetEmailModal = ({ onClose }) => {
  const dispatch = useDispatch();

  // Поля формы
  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      validation: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }
  ];

  // Обработчик отправки формы
  const handleSendResetEmail = async (values) => {
    try {
      await dispatch(sendResetPasswordEmail(values.email)); 
      alert("Password reset email sent!");
      onClose();
    } catch (error) {
      console.error("Error sending reset email:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Reset your Password</h2>
        <AuthForm
          fields={fields}
          onSubmit={handleSendResetEmail}
          className={css.formContainer}
        />
        <button onClick={onClose} className={css.closeButton}>Close</button>
      </div>
    </div>
  );
};

