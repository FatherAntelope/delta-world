import React, { useEffect } from 'react';
import '../../flex-grid/FlexGrid.css';
import { Alert, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import CardComment from '../../cards/card-comment/CardComment';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FORM_LIMIT_POST_COMMENTS, ModalID } from '../../../constants/common';
import { IResponseCommentPreview } from '../../../types/api/dumMyApi';
import { getDateTimePublication, getUserFullName } from '../../../utils/common';
import Preloader from '../../preloader/Preloader';
import Tooltip from '../../tooltip/Tooltip';

const CommentsForm = () => {
  const modals = useTypedSelector((state) => state.modalsForm);
  const modalPostUserStore = modals[ModalID.POSTS_USER];

  const { postComments, isLoading, error } = useTypedSelector((state) => state.postCommentsForm);
  const { loadPostCommentsFormAC } = useActions();

  const handlePaginationChange = (e: number) => {
    loadPostCommentsFormAC(modalPostUserStore?.modalData?.postID, e - 1, FORM_LIMIT_POST_COMMENTS);
  };

  useEffect(() => {
    if (modalPostUserStore?.modalData?.postID !== undefined) {
      loadPostCommentsFormAC(modalPostUserStore?.modalData?.postID, 0, FORM_LIMIT_POST_COMMENTS);
    }
  }, [modalPostUserStore?.modalData?.postID]);

  if (isLoading) {
    return <div style={{ height: 70 }}><Preloader /></div>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <>
      <div className="row">
        {postComments.data.map((item: IResponseCommentPreview) => (
          <div className="col-6" key={item.id}>
            <CardComment
              text={item.message}
              userAvatarURL={item.owner.picture}
              userFullName={(
                <Tooltip textInfo={item.owner.id}>
                  <Link to={`/user/${item.owner.id}`}>
                    {getUserFullName(item.owner.title, item.owner.firstName, item.owner.lastName)}
                  </Link>
                </Tooltip>
              )}
              dateOfPublication={getDateTimePublication(item.publishDate)}
            />
          </div>
        ))}
      </div>
      {postComments.total > FORM_LIMIT_POST_COMMENTS && (
      <div className="row row__justify_end">
        <Pagination
          pageSize={postComments.limit}
          total={postComments.total}
          current={postComments.page + 1}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
      )}
    </>
  );
};

export default CommentsForm;
