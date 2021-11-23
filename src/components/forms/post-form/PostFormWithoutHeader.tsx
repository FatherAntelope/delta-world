import React from 'react';
import { Alert } from 'antd';
import CardPost from '../../cards/card-post/CardPost';
import { checkPictureAndGet } from '../../../utils/common';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Preloader from '../../preloader/Preloader';

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
      <CardPost.ImageBig imageURL={checkPictureAndGet(post.image)} />
    </CardPost.Big>
  );
};

export default PostForm;
