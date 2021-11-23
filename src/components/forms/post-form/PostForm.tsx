import React from 'react';
import { Alert } from 'antd';
import { Link } from 'react-router-dom';
import CardPost from '../../cards/card-post/CardPost';
import { checkPictureAndGet, getDateTimePublication, getUserFullName } from '../../../utils/common';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Preloader from '../../preloader/Preloader';
import Tooltip from '../../tooltip/Tooltip';

const PostForm = () => {
  const { post, isLoading, error } = useTypedSelector((state) => state.postForm);

  if (isLoading) {
    return <div style={{ height: 70 }}><Preloader /></div>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <CardPost.Big
      text={post.text}
    >
      <CardPost.HeaderBig
        userAvatarURL={post.owner.picture}
        dateOfPublication={getDateTimePublication(post.publishDate)}
        userFullName={(
          <Tooltip textInfo={post.owner.id}>
            <Link to={`/user/${post.owner.id}`}>
              {getUserFullName(post.owner.title, post.owner.firstName, post.owner.lastName)}
            </Link>
          </Tooltip>
        )}
      />
      <CardPost.ImageBig imageURL={checkPictureAndGet(post.image)} />
    </CardPost.Big>
  );
};

export default PostForm;
