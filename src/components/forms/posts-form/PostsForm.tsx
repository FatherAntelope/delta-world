import React, { useEffect } from 'react';
import '../../flex-grid/FlexGrid.css';
import { Alert, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import CardPost from '../../cards/card-post/CardPost';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { IResponsePostPreview } from '../../../types/api/dumMyApi';
import { getDateTimePublication, getUserFullName } from '../../../utils/common';
import Preloader from '../../preloader/Preloader';
import { FORM_LIMIT_POSTS } from '../../../constants/common';
import Tooltip from '../../tooltip/Tooltip';

const PostsForm = () => {
  const { posts, isLoading, error } = useTypedSelector((state) => state.postsForm);
  const { loadPostsFormAC } = useActions();

  useEffect(() => {
    loadPostsFormAC(0, FORM_LIMIT_POSTS);
  }, []);

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
            <CardPost
              imageURL={item.image}
              text={item.text}
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
      <div className="row row__justify_end">
        <Pagination
          pageSize={posts.limit}
          total={posts.total}
          current={posts.page + 1}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default PostsForm;
