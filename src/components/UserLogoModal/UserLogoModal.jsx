import { useState } from 'react';
import css from './UserLogoModal.module.css';
import SvgIcons from 'components/SvgIcons/SvgIcons';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';

export default function UserLogoModal({ isOpen, onClose }) {
  const [activateModal, setActivateModal] = useState(null);

  const openModal = modalName => {
    setActivateModal(modalName);
  };

  const closeModal = () => {
    setActivateModal(null);
    onClose();
  };

  return (
    <div className={css.user__info}>
      <div className={css.user__actions}>
        <button className={css.user__btn} onClick={() => openModal('setting')}>
          <SvgIcons name="settings" className={css.user__icon} />
          <p className={css.user__desc}>Setting</p>
        </button>
        <button className={css.user__btn} onClick={() => openModal('logout')}>
          <SvgIcons name="logout" className={css.user__icon} />
          <p className={css.user__desc}>Log out</p>
        </button>
      </div>

      {activateModal && (
        <ModalWrapper
          modalName={activateModal}
          closeModal={closeModal}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </div>
  );
}
