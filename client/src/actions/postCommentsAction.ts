import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { fetchPostCommentsForm } from '../utils/fetchDumMyApi';
import { LOADING_EMULATION_TIME } from '../constants/common';
import { PostCommentsFormAC, PostCommentsFormACTypes } from '../types/redux/postCommentsForm';
import HttpStatuses from '../constants/httpStatuses';

const loadPostCommentsFormAC = (
  postID: string, page: number, limit: number
) => async (dispatch: Dispatch<PostCommentsFormAC>) => {
  dispatch({
    type: PostCommentsFormACTypes.LOAD_POST_COMMENTS_FORM
  });

  try {
    const response: AxiosResponse = await fetchPostCommentsForm(postID, page, limit);
    const postComments = await response.data;

    if (response.status === HttpStatuses.OK) {
      setTimeout(() => {
        dispatch({
          type: PostCommentsFormACTypes.LOAD_POST_COMMENTS_FORM_SUCCESS,
          payload: {
            data: postComments.data, total: postComments.total, page: postComments.page, limit: postComments.limit
          }
        });
      }, LOADING_EMULATION_TIME);
    } else {
      throw new Error(`${response.status.toString()} – ${postComments.error}`);
    }
  } catch (e) {
    dispatch({
      type: PostCommentsFormACTypes.LOAD_POST_COMMENTS_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadPostCommentsFormAC };
