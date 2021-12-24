import { loadUsersFormAC } from '../../actions/usersFormAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing loadUsersForm AC', () => {
  const loadAC = loadUsersFormAC(0, 5);
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: [], limit: undefined, page: undefined, total: undefined
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchUsersForm.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'USERS_FORM/LOAD_USERS_FORM' });
  });

  test('Call loadUsersFormAC:', () => {
    // @ts-ignore
    localServerAPI.fetchUsersForm.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'USERS_FORM/LOAD_USERS_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchUsersForm.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchUsersForm.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'USERS_FORM/LOAD_USERS_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});
