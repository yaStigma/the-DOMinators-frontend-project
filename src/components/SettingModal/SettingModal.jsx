import { useMemo, useState } from 'react';
import css from './SettingModal.module.css';
import SvgIcons from '../SvgIcons/SvgIcons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

const ValidateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short')
    .max(50, 'Name is too long.')
    .trim(),
  email: Yup.string().email('Invalid email address').trim(),
  new: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be not more than 64 characters'),
  repeat: Yup.string().oneOf([Yup.ref('new')], 'Passwords must match'),
});


export default function SettingModal({ onClose }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const userInfo = useSelector(selectUser)
  const initialValues = {
    gender: userInfo.gender || 'woman',
    name: userInfo.name || '',
    email: userInfo.email || '',
    outdated:"",
    new: '',
    repeat:""
  }

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onClose();
  };
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const [showPassword, setShowPassword] = useState({
    outdated: false,
    new: false,
    repeat: false,
  });
  const toggleShowPassword = field => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className={css.modal__container}>
      <div className={css.modal__header}>
        <h2 className={css.modal__title}>Setting</h2>
        <button className={css.modal__close} onClick={onClose}>
          <SvgIcons className={css.modal__close_icon} name="close" />
        </button>
      </div>
      <div className={css.modal__photo}>
        <h3 className={css.modal__form_desc}>Your photo</h3>
        {/* <span className={css.modal__user_photo}></span> */}
        <img src={previewUrl} alt="" className={css.modal__user_photo} />
        <label className={css.modal__label_photo}>
          <SvgIcons name="arrow" />
          Upload a photo
          <input
            className={css.modal__add_photo}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidateSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.modal__form}>
          <div className={css.modal__body}>
            <div className={css.modal__gender}>
              <h3 className={css.modal__form_desc}>Your gender identity</h3>
              <label className={css.modal__form_check}>
                <Field
                  className={css.modal__form_radio}
                  type="radio"
                  value="woman"
                  name="gender"
                />
                Woman
              </label>
              <label className={css.modal__form_check}>
                <Field
                  className={css.modal__form_radio}
                  type="radio"
                  value="man"
                  name="gender"
                />
                Man
              </label>
            </div>
            <div className={css.modal__user}>
              <h3 className={css.modal__form_desc}>Your name</h3>
              <label className={css.modal__form_label}>
                <Field
                  className={css.modal__form_input}
                  type="text"
                  placeholder="David"
                  name="name"
                  autoComplete="name"
                />
                <ErrorMessage component="span" name="name" />
              </label>
              <h3 className={css.modal__form_desc}>E-mail</h3>
              <label className={css.modal__form_label}>
                <Field
                  className={css.modal__form_input}
                  type="text"
                  placeholder="david01@gmail.com"
                  name="email"
                  autoComplete="email"
                />
                <ErrorMessage component="span" name="email" />
              </label>
            </div>
          </div>
          <div className={css.modal__password}>
            <h3 className={css.modal__form_desc}>Password</h3>
            <label className={css.modal__form_label}>
              Outdated password:
              <Field
                className={css.modal__form_password}
                type={showPassword.outdated ? 'text' : 'password'}
                placeholder="Password"
                name="outdated"
                autoComplete="outdated"
              />
              <button
                type="button"
                className={css.modal__input_icon}
                onClick={() => toggleShowPassword('outdated')}
              >
                <SvgIcons name={showPassword.outdated ? 'eye' : 'eyeSlash'} />
              </button>
            </label>
            <label className={css.modal__form_label}>
              New Password:
              <Field
                className={css.modal__form_password}
                type={showPassword.new ? 'text' : 'password'}
                placeholder="Password"
                name="new"
                autoComplete="new"
              />
              <button
                type="button"
                className={css.modal__input_icon}
                onClick={() => toggleShowPassword('new')}
              >
                <SvgIcons name={showPassword.new ? 'eye' : 'eyeSlash'} />
              </button>
              <ErrorMessage component="span" name="new" />
            </label>
            <label className={css.modal__form_label}>
              Repeat new password:
              <Field
                className={css.modal__form_password}
                type={showPassword.repeat ? 'text' : 'password'}
                placeholder="Password"
                name="repeat"
                autoComplete="repeat"
              />
              <button
                type="button"
                className={css.modal__input_icon}
                onClick={() => toggleShowPassword('repeat')}
              >
                <SvgIcons name={showPassword.repeat ? 'eye' : 'eyeSlash'} />
              </button>
              <ErrorMessage component="span" name="repeat" />
            </label>
          </div>
          <button type="submit" className={css.modal__btn}>
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
}
