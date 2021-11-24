import React from 'react';
import './Modal.css';
import { useActions } from '../../hooks/useActions';

interface IPropsChild {
  children: React.ReactNode;
  isActive: boolean;
}

const Modal = ({ children, isActive }: IPropsChild) => {
  const { closeModalsFormAC } = useActions();

  return (
    <div className={`modal ${isActive && 'modal_active'}`}>
      <div className="modal__close" onClick={() => closeModalsFormAC()}>
        <span className="modal__close-icon" />
      </div>
      <div className="modal__dialog">
        <div
          className={`modal__content ${isActive && 'modal__content_active'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
