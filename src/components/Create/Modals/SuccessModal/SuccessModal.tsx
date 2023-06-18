import { Link } from 'react-router-dom';
import Modal from '../Modal';
import './SuccessModal.scss';
import { useDispatch } from 'react-redux';
import { reset } from '../../../../redux/slices/formSlice';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  const dispatch = useDispatch();

  const handleMainClick = () => {
    dispatch(reset());
    onClose();
  };

  return (
    <Modal onClose={onClose} className="modal-success">
      <div className="title">Форма успешно отправлена</div>
      <div className="icon-container">
        <div className="icon-wrapper">
          <img
            className="icon"
            src="/src/assets/img/icons/check-success.svg"
            alt="Иконки успешной отправки формы"
          />
        </div>
      </div>
      <Link
        onClick={handleMainClick}
        className="btn-default btn"
        to="/"
        id="button-to-main"
      >
        На главную
      </Link>
    </Modal>
  );
};

export default SuccessModal;
