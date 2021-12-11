import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { LOADING_EMULATION_TIME } from '../constants/common';
import { PostFormAC, PostFormACTypes } from '../types/redux/postForm';
import { fetchPostForm } from '../utils/fetchDumMyApi';
import HttpStatuses from '../constants/httpStatuses';

const loadPostFormAC = (id: string) => async (dispatch: Dispatch<PostFormAC>) => {
  dispatch({
    type: PostFormACTypes.LOAD_POST_FORM
  });

  try {
    const response: AxiosResponse = await fetchPostForm(id);
    const post = await response.data;

    if (response.status === HttpStatuses.OK) {
      setTimeout(() => {
        dispatch({
          type: PostFormACTypes.LOAD_POST_FORM_SUCCESS,
          payload: post.data
        });
      }, LOADING_EMULATION_TIME);
    } else {
      throw new Error(`${response.status.toString()} – ${post.error.message}`);
    }
  } catch (e) {
    dispatch({
      type: PostFormACTypes.LOAD_POST_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadPostFormAC };
