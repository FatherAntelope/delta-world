import React from 'react';
import '../../flex-grid/FlexGrid.css';
import { Pagination } from 'antd';
import CardPost from '../../cards/card-post/CardPost';

const url = 'https://cdn.dribbble.com/users/985736/screenshots/2745335/086._progress_bar.png';

const PostsForm = () => (
  <>
    <div className="row">
      <div className="col-4">
        <CardPost
          imageURL={url}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi."
          userAvatarURL={url}
          userFullName="mr. Will Smith"
          dateOfPublication="10 мая в 04:20"
        />
      </div>
      <div className="col-4">
        <CardPost
          imageURL={url}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi."
          userAvatarURL={url}
          userFullName="mr. Will Smith"
          dateOfPublication="10 мая в 04:20"
        />
      </div>
      <div className="col-4">
        <CardPost
          imageURL={url}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi."
          userAvatarURL={url}
          userFullName="mr. Will Smith"
          dateOfPublication="10 мая в 04:20"
        />
      </div>
      <div className="col-4">
        <CardPost
          imageURL={url}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi."
          userAvatarURL={url}
          userFullName="mr. Will Smith"
          dateOfPublication="10 мая в 04:20"
        />
      </div>
      <div className="col-4">
        <CardPost
          imageURL={url}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi."
          userAvatarURL={url}
          userFullName="mr. Will Smith"
          dateOfPublication="10 мая в 04:20"
        />
      </div>
      <div className="col-4">
        <CardPost
          imageURL={url}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi."
          userAvatarURL={url}
          userFullName="mr. Will Smith"
          dateOfPublication="10 мая в 04:20"
        />
      </div>
    </div>
    <div className="row row__justify_end">
      <Pagination total={121} showSizeChanger={false} />
    </div>
  </>
);

export default PostsForm;
