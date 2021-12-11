import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { UsersFormAC, UsersFormACTypes } from '../types/redux/usersForm';
import { fetchUsersForm } from '../utils/fetchDumMyApi';
import { LOADING_EMULATION_TIME } from '../constants/common';
import HttpStatuses from '../constants/httpStatuses';

const loadUsersFormAC = (page: number, limit: number) => async (dispatch: Dispatch<UsersFormAC>) => {
  dispatch({
    type: UsersFormACTypes.LOAD_USERS_FORM
  });

  try {
    const response: AxiosResponse = await fetchUsersForm(page, limit);
    const users = await response.data;

    if (response.status === HttpStatuses.OK) {
      setTimeout(() => {
        dispatch({
          type: UsersFormACTypes.LOAD_USERS_FORM_SUCCESS,
          payload: {
            data: users.data, total: users.total, page: users.page, limit: users.limit
          }
        });
      }, LOADING_EMULATION_TIME);
    } else {
      throw new Error(`${response.status.toString()} – ${users.error.message}`);
    }
  } catch (e) {
    dispatch({
      type: UsersFormACTypes.LOAD_USERS_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadUsersFormAC };
