import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./AuthForm.module.css";
import { useState } from "react";

export const AuthForm = ({ title, fields, onSubmit, navigationLinks }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevState) => !prevState);
  };

  const initialValues = fields.reduce(
    (values, field) => ({ ...values, [field.name]: "" }),
    {}
  );

  const validationSchema = Yup.object(
    fields.reduce(
      (schema, field) => ({
        ...schema,
        [field.name]: field.validation,
      }),
      {}
    )
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={css.formContainer} autoComplete="off">
          <h2>{title}</h2>
          {fields.map((field) => (
            <div key={field.name} className={css.formFieldWrap}>
              <label className={css.formLabel}>
                {field.label}
                <div className={css.passwordWrapper}>
                  <Field
                    type={
                      field.name === "password" && !showPassword
                        ? "password"
                        : field.name === "repeatPassword" && !showRepeatPassword
                        ? "password"
                        : "text"
                    }
                    name={field.name}
                    placeholder={field.placeholder}
                    className={
                      errors[field.name] && touched[field.name]
                        ? `${css.formField} ${css.formFieldError}`
                        : css.formField
                    }
                  />
                  {field.name === "password" && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className={css.showPasswordButton}
                    >
                      <img
                        src={
                          showPassword
                            ? "/images_auth/eye.svg"
                            : "/images_auth/eye-slash.svg"
                        }
                        alt={showPassword ? "Hide password" : "Show password"}
                      />
                    </button>
                  )}
                  {field.name === "repeatPassword" && (
                    <button
                      type="button"
                      onClick={toggleRepeatPasswordVisibility}
                      className={css.showPasswordButton}
                    >
                      <img
                        src={
                          showRepeatPassword
                            ? "/images_auth/eye.svg"
                            : "/images_auth/eye-slash.svg"
                        }
                        alt={
                          showRepeatPassword ? "Hide password" : "Show password"
                        }
                      />
                    </button>
                  )}
                </div>
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className={css.error}
                />
              </label>
            </div>
          ))}
          <button type="submit" disabled={isSubmitting} className={css.btn}>
            {isSubmitting ? "Submitting..." : title}
          </button>
          <div className={css.navLinksContainer}>
            {navigationLinks?.map((link) => (
              <button
                key={link.text}
                type="button"
                className={css.navButton}
                onClick={link.onClick}
              >
                {link.text}
              </button>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};
