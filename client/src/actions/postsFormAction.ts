import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { fetchPostsForm } from '../utils/fetchDumMyApi';
import { PostsFormAC, PostsFormACTypes } from '../types/redux/postsForm';
import { LOADING_EMULATION_TIME } from '../constants/common';
import HttpStatuses from '../constants/httpStatuses';

const loadPostsFormAC = (page: number, limit: number) => async (dispatch: Dispatch<PostsFormAC>) => {
  dispatch({
    type: PostsFormACTypes.LOAD_POSTS_FORM
  });

  try {
    const response: AxiosResponse = await fetchPostsForm(page, limit);
    const posts = await response.data;

    if (response.status === HttpStatuses.OK) {
      setTimeout(() => {
        dispatch({
          type: PostsFormACTypes.LOAD_POSTS_FORM_SUCCESS,
          payload: {
            data: posts.data, total: posts.total, page: posts.page, limit: posts.limit
          }
        });
      }, LOADING_EMULATION_TIME);
    } else {
      throw new Error(`${response.status.toString()} – ${posts.error.message}`);
    }
  } catch (e) {
    dispatch({
      type: PostsFormACTypes.LOAD_POSTS_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadPostsFormAC };
