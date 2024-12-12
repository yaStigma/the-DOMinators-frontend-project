import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ResetPasswordForm.module.css";

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleRepeatPasswordVisibility = () =>
    setShowRepeatPassword((prev) => !prev);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Repeat Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted", values);
    // добавить логику работы с API или сервером здесь
    resetForm();
  };

  return (
    <Formik
      initialValues={{ password: "", repeatPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={css.formContainer} autoComplete="off">
          <h2>Reset your Password</h2>

          <label htmlFor="password" className={css.formLabel}>
            New Password
            <div className={css.passwordWrapper}>
              <Field
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={
                  errors.password && touched.password
                    ? `${css.formField} ${css.formFieldError}`
                    : css.formField
                }
                autoComplete="new-password"
              />
              <button
                type="button"
                className={css.showPasswordButton}
                onClick={togglePasswordVisibility}
              >
                <img
                  src={
                    showPassword ? "/images_auth/eye.svg" : "/images_auth/eye-slash.svg"
                  }
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>

          <label htmlFor="repeatPassword" className={css.formLabel}>
            Repeat new Password
            <div className={css.passwordWrapper}>
              <Field
                id="repeatPassword"
                type={showRepeatPassword ? "text" : "password"}
                name="repeatPassword"
                placeholder="Repeat password"
                className={
                  errors.repeatPassword && touched.repeatPassword
                    ? `${css.formField} ${css.formFieldError}`
                    : css.formField
                }
                autoComplete="new-password"
              />
              <button
                type="button"
                className={css.showPasswordButton}
                onClick={toggleRepeatPasswordVisibility}
              >
                <img
                  src={
                    showRepeatPassword
                      ? "/images_auth/eye.svg"
                      : "/images_auth/eye-slash.svg"
                  }
                  alt={showRepeatPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={css.error}
            />
          </label>

          <button type="submit" disabled={isSubmitting} className={css.btn}>
            {isSubmitting ? "Resetting password..." : "Reset password"}
          </button>

          <button
            type="button"
            className={css.navButton}
            onClick={() => (window.location.href = "/")}
          >
            Back to Homepage
          </button>
        </Form>
      )}
    </Formik>
  );
};
