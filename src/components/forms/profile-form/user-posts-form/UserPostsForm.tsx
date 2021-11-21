import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Pagination } from 'antd';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { IResponsePostPreview } from '../../../../types/api/dumMyApi';
import CardPost from '../../../cards/card-post/CardPost';
import { FORM_LIMIT_USER_POSTS } from '../../../../constants/common';

interface ISearchParams {
  id: string;
}

const UserPostsForm = () => {
  const searchParams = useParams<ISearchParams>();

  const { userPosts, error } = useTypedSelector((state) => state.userPostsForm);
  const { loadUserPostsFormAC } = useActions();

  useEffect(() => {
    loadUserPostsFormAC(searchParams.id, 0, FORM_LIMIT_USER_POSTS);
  }, []);

  const handlePaginationChange = (e: number) => {
    loadUserPostsFormAC(searchParams.id, e - 1, FORM_LIMIT_USER_POSTS);
  };

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
      <div className="row row__justify_end">
        <Pagination
          pageSize={userPosts.limit}
          total={userPosts.total}
          current={userPosts.page + 1}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default UserPostsForm;
