import SvgIcons from 'components/SvgIcons/SvgIcons';
import css from './UserLogoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';

export default function UserLogoutModal({ closeModal,closeBackdrop }) {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut());
    closeModal()
  };
  return (
    <div className={css.backdrop} onClick={closeBackdrop}>
      <section className={css.modal}>
    <div className={css.modal__container}>
      <div className={css.modal__header}>
        <h2 className={css.modal__title}>Log out</h2>
        <button className={css.modal__close} onClick={closeModal}>
          <SvgIcons name="close"className={css.modal__close_icon}/>
        </button>
      </div>
      <div className={css.modal__actions}>
        <h3 className={css.modal__ques}>Do you really want to leave?</h3>
        <button type="button" className={css.modal__logout} onClick={handleLogOut}>
          Log out
        </button>
        <button type="button" className={css.modal__cancel} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
    </section>
    </div>
  );
}
