import { useEffect } from 'react';
import css from './ModalWrapper.module.css';
import SettingModal from 'components/SettingModal/SettingModal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';

export default function ModalWrapper({ modalName, onClose }) {
  useEffect(() => {
    const handleCloseEsc = e => {
      if (modalName && e.key === 'Escape') {
        onClose();
      }
    };
    if(modalName){
      document.body.style.overflow="hidden"
    }
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
      document.body.style.overflow=""

    };
  }, [modalName, onClose]);

  const handleCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleCloseBackdrop}>
      <section className={css.modal}>
        {modalName === 'setting' && <SettingModal onClose={onClose} />}
        {modalName === 'logout' && <UserLogoutModal onClose={onClose} />}
      </section>
    </div>
  );
}
