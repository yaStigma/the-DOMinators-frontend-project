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
      <section className={css.deleteModal}>
        <div className={css.deleteModal__container}>
          <div className={css.deleteModal__header}>
            <h2 className={css.deleteModal__title}>Delete entry</h2>
            <button className={css.deleteModal__close} onClick={closeModal}>
              <SvgIcons name="close" className={css.deleteModal__close_icon} />
            </button>
          </div>
          <div className={css.deleteModal__actions}>
            <p className={css.deleteModal__ques}>
              Are you sure you want to delete the entry of {record.amount} ml 
              recorded at {new Date(record.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}?
            </p>
            <div  className={css.deleteModal__btnsWrap}>
            <button
              type="button"
              className={css.deleteModal__delete}
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className={css.deleteModal__cancel}
              onClick={closeModal}
            >
              Cancel
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
