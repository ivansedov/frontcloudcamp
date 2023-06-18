import Modal from '../Modal';
import './ErrorModal.scss';
import iconError from '../../../../assets/img/icons/check-error.svg';
import iconClose from '../../../../assets/img/icons/close.svg';

interface ErrorModalProps {
  onClose: () => void;
}

const ErrorModal = ({ onClose }: ErrorModalProps) => {
  return (
    <Modal onClose={onClose} className="modal-error">
      <div className="head">
        <div className="title">Ошибка</div>
        <div className="btn-close" onClick={() => onClose()}>
          <img
            className="btn-close__icon"
            src={iconClose}
            alt="Иконки закрытия модального окна"
            title="Закрыть"
          />
        </div>
      </div>
      <div className="icon-container">
        <div className="icon-wrapper">
          <img className="icon" src={iconError} alt="Иконки ошибки" />
        </div>
      </div>
      <button
        type="button"
        className="btn-default btn"
        onClick={() => onClose()}
        id="button-close"
      >
        Закрыть
      </button>
    </Modal>
  );
};

export default ErrorModal;
