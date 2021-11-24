import React, { useEffect } from 'react';
import Modal from '../../modal/Modal';
import CommentsForm from '../comments-form/CommentsForm';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import PostFormWithoutHeader from '../post-form/PostFormWithoutHeader';
import { ModalID } from '../../../constants/common';

const ModalPostForm = () => {
  const modals = useTypedSelector((state) => state.modalsForm);
  const modalPostUserStore = modals[ModalID.POSTS_USER];
  const { loadPostFormAC, closeModalsFormAC } = useActions();

  useEffect(() => {
    if (modalPostUserStore?.modalData?.postID !== undefined && modalPostUserStore?.isActive) {
      loadPostFormAC(modalPostUserStore?.modalData?.postID);
    }
  }, [modalPostUserStore?.modalData]);

  useEffect(() => () => {
    closeModalsFormAC();
  }, []);

  return (
    <Modal isActive={modalPostUserStore?.isActive}>
      <PostFormWithoutHeader />
      <CommentsForm />
    </Modal>
  );
};

export default ModalPostForm;
