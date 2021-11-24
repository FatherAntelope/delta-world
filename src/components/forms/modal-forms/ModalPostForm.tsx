import React, { useEffect } from 'react';
import Modal from '../../modal/Modal';
import CommentsForm from '../comments-form/CommentsForm';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import PostForm from '../post-form/PostForm';
import { ModalID } from '../../../constants/common';

const ModalPostForm = () => {
  const modals = useTypedSelector((state) => state.modalsForm);
  const modalPostStore = modals[ModalID.POSTS];
  const { loadPostFormAC, closeModalsFormAC } = useActions();

  useEffect(() => {
    if (modalPostStore?.modalData?.postID !== undefined && modalPostStore?.isActive) {
      loadPostFormAC(modalPostStore?.modalData?.postID);
    }
  }, [modalPostStore?.modalData]);

  useEffect(() => () => {
    closeModalsFormAC();
  }, []);

  return (
    <Modal isActive={modalPostStore?.isActive}>
      <PostForm />
      <CommentsForm />
    </Modal>
  );
};

export default ModalPostForm;
