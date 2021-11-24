import React, { useEffect } from 'react';
import Modal from '../../modal/Modal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { ModalID } from '../../../constants/common';
import CardUserEdit from '../../cards/card-user-edit/CardUserEdit';

const ModalPostForm = () => {
  const modals = useTypedSelector((state) => state.modalsForm);
  const { user } = useTypedSelector((state) => state.userFullForm);
  const modalOpenUpdateUserStore = modals[ModalID.UPDATE_USER];
  const { closeModalsFormAC } = useActions();

  useEffect(() => {
    if (modalOpenUpdateUserStore?.modalData?.postID !== undefined && modalOpenUpdateUserStore?.isActive) {
      console.log('ssss');
    }
  }, [modalOpenUpdateUserStore?.modalData]);

  useEffect(() => () => {
    closeModalsFormAC();
  }, []);

  return (
    <Modal isActive={modalOpenUpdateUserStore?.isActive} size="mini">
      <CardUserEdit
        avatar={user.picture}
        gender={user.gender}
        firstName={user.firstName}
        lastName={user.lastName}
        dateOfBirth={user.dateOfBirth}
        phone={user.phone}
      />
    </Modal>
  );
};

export default ModalPostForm;
