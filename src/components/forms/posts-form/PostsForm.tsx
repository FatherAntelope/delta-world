import React, { useEffect } from 'react';
import '../../flex-grid/FlexGrid.css';
import { Alert, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import CardPost from '../../cards/card-post/CardPost';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { IResponsePostPreview } from '../../../types/api/dumMyApi';
import { checkPictureAndGet, getDateTimePublication, getUserFullName } from '../../../utils/common';
import Preloader from '../../preloader/Preloader';
import { FORM_LIMIT_POSTS, ModalID } from '../../../constants/common';
import Tooltip from '../../tooltip/Tooltip';
import ModalPostForm from '../modal-forms/ModalPostForm';

const PostsForm = () => {
  const { posts, isLoading, error } = useTypedSelector((state) => state.postsForm);
  const { loadPostsFormAC, openModalsFormAC } = useActions();

  useEffect(() => {
    loadPostsFormAC(0, FORM_LIMIT_POSTS);
  }, []);

  const handleOpenModal = (id: string) => {
    openModalsFormAC(ModalID.POSTS, { postID: id });
  };

  const handlePaginationChange = (e: number) => {
    loadPostsFormAC(e - 1, FORM_LIMIT_POSTS);
  };

  if (isLoading) {
    return <Preloader />;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <>
      <div className="row">
        {posts.data.map((item: IResponsePostPreview) => (
          <div className="col-4" key={item.id}>
            <CardPost.Preview
              text={item.text}
              userAvatarURL={checkPictureAndGet(item.owner.picture)}
              userFullName={(
                <Tooltip textInfo={item.owner.id}>
                  <Link to={`/user/${item.owner.id}`}>
                    {getUserFullName(item.owner.title, item.owner.firstName, item.owner.lastName)}
                  </Link>
                </Tooltip>
                )}
              dateOfPublication={getDateTimePublication(item.publishDate)}
            >
              <div style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleOpenModal(item.id)}>
                <CardPost.Image imageURL={item.image} />
              </div>
            </CardPost.Preview>
          </div>
        ))}
      </div>
      <div className="row row__justify_end">
        <Pagination
          pageSize={posts.limit}
          total={posts.total}
          current={posts.page + 1}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
      <ModalPostForm />
    </>
  );
};

export default PostsForm;
