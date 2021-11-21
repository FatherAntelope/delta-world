import { Dispatch } from 'redux';
import { UsersFormAC, UsersFormACTypes } from '../types/redux/usersForm';
import { fetchUsersForm } from '../utils/fetchDumMyApi';

const loadUsersFormAC = (page: number, limit: number) => async (dispatch: Dispatch<UsersFormAC>) => {
  dispatch({
    type: UsersFormACTypes.LOAD_USERS_FORM
  });

  try {
    const response = await fetchUsersForm(page, limit);
    const users = await response.json();

    if (response.ok) {
      setTimeout(() => {
        dispatch({
          type: UsersFormACTypes.LOAD_USERS_FORM_SUCCESS,
          payload: {
            data: users.data, total: users.total, page: users.page, limit: users.limit
          }
        });
      }, 500);
    } else {
      throw new Error(`${response.status.toString()} – ${users.error}`);
    }
  } catch (e) {
    dispatch({
      type: UsersFormACTypes.LOAD_USERS_FORM_ERROR,
      payload: String(e)
    });
  }
};

export { loadUsersFormAC };
