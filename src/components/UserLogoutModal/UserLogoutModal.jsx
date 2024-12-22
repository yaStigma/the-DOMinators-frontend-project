import SvgIcons from 'components/SvgIcons/SvgIcons';
import css from './UserLogoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';

export default function UserLogoutModal({ onClose }) {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut());
    onClose()
  };
  return (
    <div className={css.modal__container}>
      <div className={css.modal__header}>
        <h2 className={css.modal__title}>Log out</h2>
        <button className={css.modal__close} onClick={onClose}>
          <SvgIcons name="close"className={css.modal__close_icon}/>
        </button>
      </div>
      <div className={css.modal__actions}>
        <h3 className={css.modal__ques}>Do you really want to leave?</h3>
        <button type="button" className={css.modal__logout} onClick={handleLogOut}>
          Log out
        </button>
        <button type="button" className={css.modal__cancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
