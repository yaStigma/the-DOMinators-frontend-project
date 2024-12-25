import SvgIcons from 'components/SvgIcons/SvgIcons';
import css from './DeleteWaterModal.module.css';
import { useDispatch } from 'react-redux';
import { deleteWaterRecord } from '../../redux/water/operations.js';

export const DeleteWaterModal = ({ record, closeModal, closeBackdrop, onSave }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (!record || !record._id) {
      console.error('No record provided for deletion');
      return;
    }
    try {
      const result = await dispatch(deleteWaterRecord(record._id)); // Удаляем запись
      if (result.meta.requestStatus === 'fulfilled') {
        if (onSave) {
          await onSave(); // Вызываем обновление списка, если передано
        }
        closeModal();
      } else {
        console.error('Failed to delete water record');
      }
    } catch (err) {
      console.error('Error during deletion:', err);
    }
  };

  return (
    <div className={css.backdrop} onClick={(e) => e.target === e.currentTarget && closeBackdrop()}>
      <section className={css.modal}>
        <div className={css.modal__container}>
          <div className={css.modal__header}>
            <h2 className={css.modal__title}>Delete water record</h2>
            <button className={css.modal__close} onClick={closeModal}>
              <SvgIcons name="close" className={css.modal__close_icon} />
            </button>
          </div>
          <div className={css.modal__actions}>
            <h3 className={css.modal__ques}>
              Do you really want to delete the water record of 
              <strong> {record.amount} ml</strong> 
              recorded at 
              <strong> {new Date(record.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</strong>?
            </h3>
            <button
              type="button"
              className={css.modal__logout}
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className={css.modal__cancel}
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
