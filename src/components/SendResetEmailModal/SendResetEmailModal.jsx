import React from 'react';
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
  className={css.modalContent}  
  overlayClassName={css.modalOverlay}
  style={{
    content: {
      width: '500px', 
      height: '300px', 
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, 50%)',
    },
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }}
>
  <div className={css.modalWrapper}>
    <AuthForm
      title="Reset your Password"
      fields={fields}
      onSubmit={handleSendResetEmail}
      className={css.formContainer}
    />
    <button onClick={onClose} className={css.CloseButton}>Close</button>
  </div>
</Modal>
  );
};
