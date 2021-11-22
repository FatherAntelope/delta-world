import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Pagination } from 'antd';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { IResponsePostPreview } from '../../../../types/api/dumMyApi';
import CardPost from '../../../cards/card-post/CardPost';
import { FORM_LIMIT_USER_POSTS } from '../../../../constants/common';
import '../../../flex-grid/FlexGrid.css';
import Preloader from '../../../preloader/Preloader';

interface ISearchParams {
  id: string;
}

const UserPostsForm = () => {
  const searchParams = useParams<ISearchParams>();

  const { userPosts, isLoading, error } = useTypedSelector((state) => state.userPostsForm);
  const { loadUserPostsFormAC } = useActions();

  const handlePaginationChange = (e: number) => {
    loadUserPostsFormAC(searchParams.id, e - 1, FORM_LIMIT_USER_POSTS);
  };

  if (isLoading) {
    return <div style={{ height: 200 }}><Preloader /></div>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <>
      <div className="row">
        {userPosts.data.map((item: IResponsePostPreview) => (
          <div className="col-4" key={item.id}>
            <CardPost.Mini
              imageURL={item.image}
              text={item.text}
            />
          </div>
        ))}
      </div>
      {userPosts.total > FORM_LIMIT_USER_POSTS && (
      <div className="row row__justify_end">
        <Pagination
          pageSize={userPosts.limit}
          total={userPosts.total}
          current={userPosts.page + 1}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
      )}
    </>
  );
};

export default UserPostsForm;
