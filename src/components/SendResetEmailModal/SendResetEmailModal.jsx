import React, { useState } from 'react';
import Modal from 'react-modal';
import { AuthForm } from '../AuthForm/AuthForm';
import * as Yup from 'yup'; 
import { useDispatch } from 'react-redux'; 
import { sendResetPasswordEmail } from '../../redux/auth/operations';
import css from "./SendResetEmailModal.module.css";

Modal.setAppElement('#root');

export const SendResetEmailModal = ({ onClose }) => {
  const dispatch = useDispatch();

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

  const handleSendResetEmail = async (values) => {
    try {
      // Отправка запроса на сброс пароля
      await dispatch(sendResetPasswordEmail(values.email)); 
      alert("Password reset email sent!");
      onClose();
    } catch (error) {
      console.error("Error sending reset email:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose} 
      contentLabel="Reset Password Modal"
      className={css.ModalContent}
      overlayClassName={css.ModalOverlay}
    >
      <div className={css.ModalWrapper}>
 
        <AuthForm
          title="Send Reset Email"
          fields={fields}
          onSubmit={handleSendResetEmail}
        />
        <button onClick={onClose} className={css.CloseButton}>Close</button>
      </div>
    </Modal>
  );
};
