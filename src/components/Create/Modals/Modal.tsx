import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modals.scss';

const modalRoot = document.getElementById('modal-root');

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  className: string;
}

const Modal = ({ onClose, children, className }: ModalProps) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return modalRoot
    ? ReactDOM.createPortal(
        <div
          id="modal-container"
          onClick={handleOutsideClick}
          className={`modal-container ${className}`}
        >
          <div className="modal-box modal-box_size_l">{children}</div>
        </div>,
        modalRoot,
      )
    : null;
};

export default Modal;
