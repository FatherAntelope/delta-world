import { Dispatch } from 'redux';
import { fetchPostsForm } from '../utils/fetchDumMyApi';
import { PostsFormAC, PostsFormACTypes } from '../types/redux/postsForm';

const loadPostsFormAC = (page: number, limit: number) => async (dispatch: Dispatch<PostsFormAC>) => {
  dispatch({
    type: PostsFormACTypes.LOAD_POSTS_FORM
  });

  try {
    const response = await fetchPostsForm(page, limit);
    const posts = await response.json();

    if (response.ok) {
      setTimeout(() => {
        dispatch({
          type: PostsFormACTypes.LOAD_POSTS_FORM_SUCCESS,
          payload: {
            data: posts.data, total: posts.total, page: posts.page, limit: posts.limit
          }
        });
      }, 500);
    } else {
      throw new Error(`${response.status.toString()} – ${posts.error}`);
    }
  } catch (e) {
    dispatch({
      type: PostsFormACTypes.LOAD_POSTS_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadPostsFormAC };
