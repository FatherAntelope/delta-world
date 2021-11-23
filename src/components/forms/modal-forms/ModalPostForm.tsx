import React, { useEffect } from 'react';
import Modal from '../../modal/Modal';
import CommentsForm from '../comments-form/CommentsForm';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import PostForm from '../post-form/PostForm';

const ModalPostForm = () => {
  const { modalData, isActive } = useTypedSelector((state) => state.modalForm);
  const { loadPostFormAC, closeModalFormAC } = useActions();

  useEffect(() => {
    if (modalData?.postID !== undefined && isActive) {
      loadPostFormAC(modalData?.postID);
    }
  }, [modalData]);

  useEffect(() => () => {
    closeModalFormAC();
  }, []);

  return (
    <Modal isActive={isActive}>
      <PostForm />
      <CommentsForm />
    </Modal>
  );
};

export default ModalPostForm;
