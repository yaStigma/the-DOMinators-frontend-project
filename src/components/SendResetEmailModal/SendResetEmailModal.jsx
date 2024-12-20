import React from 'react';
import * as Yup from 'yup'; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { sendResetPasswordEmail } from '../../redux/auth/operations';
import css from "./SendResetEmailModal.module.css";

export const SendResetEmailModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {   
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSendResetEmail = (values, { setSubmitting }) => {
    dispatch(sendResetPasswordEmail(values.email));
    setSubmitting(false); 
    onClose();
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSendResetEmail}
        >
          {({ isSubmitting }) => (
            <Form className={css.formContainer} autoComplete="off">
              <h2 className={css.title}>Reset your Password</h2>
              <label className={css.formLabel}>
                Email
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={css.formField}
                />
                <ErrorMessage name="email" component="div" className={css.error} />
              </label>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className={css.btn}
              >
                {isSubmitting ? "Reseting Password..." : "Reset Password"}
              </button>
            </Form>
          )}
        </Formik>
        <button onClick={onClose} className={css.closeButton}>Close</button>
      </div>
    </div>
  );
};
