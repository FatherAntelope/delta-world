import React from 'react';
import './Modal.css';
import { useActions } from '../../hooks/useActions';

interface IPropsChild {
  children: React.ReactNode;
  isActive: boolean;
  size?: 'mini' | ''
}

const Modal = ({ children, isActive, size }: IPropsChild) => {
  const { closeModalsFormAC } = useActions();

  return (
    <div className={`modal ${isActive && 'modal_active'}`}>
      <div className="modal__close" onClick={() => closeModalsFormAC()}>
        <span className="modal__close-icon" />
      </div>
      <div className={`modal__dialog ${size === 'mini' && 'modal__dialog_mini'} `}>
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

Modal.defaultProps = {
  size: ''
};

export default Modal;
