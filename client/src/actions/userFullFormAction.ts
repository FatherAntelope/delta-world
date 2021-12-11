import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { fetchUserFullForm } from '../utils/fetchDumMyApi';
import { LOADING_EMULATION_TIME } from '../constants/common';
import { UserFullFormAC, UserFullFormACTypes } from '../types/redux/userFullForm';
import HttpStatuses from '../constants/httpStatuses';

const loadUserFullFormAC = (id: string) => async (dispatch: Dispatch<UserFullFormAC>) => {
  dispatch({
    type: UserFullFormACTypes.LOAD_USER_FULL_FORM
  });

  try {
    const response: AxiosResponse = await fetchUserFullForm(id);
    const user = await response.data;

    if (response.status === HttpStatuses.OK) {
      setTimeout(() => {
        dispatch({
          type: UserFullFormACTypes.LOAD_USER_FULL_FORM_SUCCESS,
          payload: user.data
        });
      }, LOADING_EMULATION_TIME);
    } else {
      throw new Error(`${response.status.toString()} – ${user.error.message}`);
    }
  } catch (e) {
    dispatch({
      type: UserFullFormACTypes.LOAD_USER_FULL_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadUserFullFormAC };
