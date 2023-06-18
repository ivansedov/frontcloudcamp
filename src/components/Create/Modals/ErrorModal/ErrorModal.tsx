import Modal from '../Modal';
import './ErrorModal.scss';

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
            src="/src/assets/img/icons/close.svg"
            alt="Иконки закрытия модального окна"
            title="Закрыть"
          />
        </div>
      </div>
      <div className="icon-container">
        <div className="icon-wrapper">
          <img
            className="icon"
            src="/src/assets/img/icons/check-error.svg"
            alt="Иконки ошибки"
          />
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
