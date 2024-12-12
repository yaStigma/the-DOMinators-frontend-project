import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SignInForm.module.css";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted", values);
    // Логика отправки данных на сервер или API
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({errors, touched, isSubmitting }) => (
        <Form className={css.formContainer} autoComplete="off">
          <h2>Sign In</h2>


          <label htmlFor="email" className={css.formLabel}>
            Email
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              className={
                errors.email && touched.email
                  ? `${css.formField} ${css.formFieldError}`
                  : css.formField
              }
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label htmlFor="password" className={css.formLabel}>
            Password
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

          <button type="submit" disabled={isSubmitting} className={css.btn}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          <div className={css.navButtonsWrapper}>
            <button
              type="button"
              className={css.navButton}
              onClick={() => (window.location.href = "/signup")}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={css.navButton}
              onClick={() => (window.location.href = "/resetpassword")}
            >
              Forgot your password?
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
