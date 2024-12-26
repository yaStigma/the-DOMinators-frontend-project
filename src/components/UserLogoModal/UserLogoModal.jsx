import { useEffect, useRef, useState } from 'react';
import css from './UserLogoModal.module.css';
import SvgIcons from 'components/SvgIcons/SvgIcons';
import SettingModal from 'components/SettingModal/SettingModal';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';

export default function UserLogoModal({ isOpen, onClose }) {
  const [activateModal, setActivateModal] = useState(null);
  const dropDownRef = useRef();
  const openModal = modalName => {
    setActivateModal(modalName);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setActivateModal(null);
        onClose();
      }
    };
    const handleClickOutside = e => {
      if (
        isOpen &&
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target) &&
        !e.target.closest(`.${css.btn}`)
      ) {
        onClose();
      }
    };
    if (activateModal) {
      document.body.style.overflow = 'hidden';
      dropDownRef.current.style.display = 'none';
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [onClose, activateModal, dropDownRef, isOpen]);

  const closeModal = () => {
    setActivateModal(null);
    onClose();
  };
  const handleCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <div className={css.user__info} ref={dropDownRef}>
        <div className={css.user__actions}>
          <button
            className={css.user__btn}
            onClick={() => openModal('setting')}
          >
            <SvgIcons name="settings" className={css.user__icon} />
            <p className={css.user__desc}>Setting</p>
          </button>
          <button className={css.user__btn} onClick={() => openModal('logout')}>
            <SvgIcons name="logout" className={css.user__icon} />
            <p className={css.user__desc}>Log out</p>
          </button>
        </div>
      </div>
      {activateModal === 'setting' && (
        <SettingModal
          closeModal={closeModal}
          closeBackdrop={handleCloseBackdrop}
        />
      )}
      {activateModal === 'logout' && (
        <UserLogoutModal
          closeModal={closeModal}
          closeBackdrop={handleCloseBackdrop}
        />
      )}
    </>
  );
}
