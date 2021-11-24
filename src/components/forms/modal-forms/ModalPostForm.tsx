import React, { useEffect } from 'react';
import Modal from '../../modal/Modal';
import CommentsForm from '../comments-form/CommentsForm';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import PostForm from '../post-form/PostForm';
import { FORM_LIMIT_POST_COMMENTS, ModalID } from '../../../constants/common';

const ModalPostForm = () => {
  const modals = useTypedSelector((state) => state.modalsForm);
  const modalPostStore = modals[ModalID.POSTS];
  const { loadPostFormAC, closeModalsFormAC, loadPostCommentsFormAC } = useActions();

  useEffect(() => {
    if (modalPostStore?.modalData?.postID !== undefined && modalPostStore?.isActive) {
      loadPostFormAC(modalPostStore?.modalData?.postID);
      loadPostCommentsFormAC(modalPostStore?.modalData?.postID, 0, FORM_LIMIT_POST_COMMENTS);
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
