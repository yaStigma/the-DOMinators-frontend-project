import React from 'react';
import * as Yup from 'yup'; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendResetPasswordEmail } from '../../redux/auth/operations';
import css from "./SendResetEmailModal.module.css";
import SvgIcons from 'components/SvgIcons/SvgIcons';
export const SendResetEmailModal = ({ onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose(); // Close modal if Escape is pressed
      }
    };

    // Add event listener for Escape key
    window.addEventListener('keydown', handleEsc);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
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
        <button onClick={onClose} className={css.closeButton}><SvgIcons name="close" className={css.iconClose}/></button>
      </div>
    </div>
  );
};
