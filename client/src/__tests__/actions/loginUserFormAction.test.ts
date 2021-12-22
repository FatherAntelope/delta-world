import { loginUserFormAC, clearLoginUserFormAC, loginUserSetValuesFormAC } from '../../actions/loginUserFormAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing loginUserForm AC', () => {
  const loadAC = loginUserFormAC('60d0fe4f5311236168a109ce');
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: {}
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchUserLoginForm.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'LOGIN_USER_FORM/LOGIN_USER_FORM' });
  });

  test('Call fetchUserLoginForm:', () => {
    // @ts-ignore
    localServerAPI.fetchUserLoginForm.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'LOGIN_USER_FORM/LOGIN_USER_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchUserLoginForm.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchUserLoginForm.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'LOGIN_USER_FORM/LOGIN_USER_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});

describe('Testing clearLoginUserForm AC', () => {
  const loadAC = clearLoginUserFormAC();
  const dispatch = jest.fn();
  const response = { firstName: '', id: '', picture: '' };

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'LOGIN_USER_FORM/LOGIN_USER_FORM_CLEAR',
      payload: response
    });
  });
});

describe('Testing loginUserSetValuesFormAC AC', () => {
  const response = { firstName: '', id: '', picture: '' };
  const loadAC = loginUserSetValuesFormAC(response.id, response.firstName, response.picture);
  const dispatch = jest.fn();

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'LOGIN_USER_FORM/LOGIN_USER_FORM_SET_VALUES',
      payload: response
    });
  });
});
