import {
  registerUserFormAction, updateUserFormAction, clearSendDataUserFormAction
} from '../../actions/sendUserFormAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing registerUserForm AC', () => {
  const body = {
    firstName: '', lastName: '', gender: 'male', title: '', email: '', dateOfBirth: '', phone: '', registerDate: ''
  };
  // @ts-ignore
  const loadAC = registerUserFormAction(body);
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: {}
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchRegisterUser.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'SEND_USER_FORM/SEND_USER_FORM' });
  });

  test('Call fetchRegisterUser:', () => {
    // @ts-ignore
    localServerAPI.fetchRegisterUser.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'SEND_USER_FORM/SEND_USER_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchRegisterUser.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchRegisterUser.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'SEND_USER_FORM/SEND_USER_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});

describe('Testing updateUserForm AC', () => {
  const body = {
    firstName: '', lastName: '', gender: 'male', title: '', email: '', dateOfBirth: '', phone: '', registerDate: ''
  };
  // @ts-ignore
  const loadAC = updateUserFormAction('2785376fdsihgbini329u58', body);
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: {}
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchUpdateUser.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'SEND_USER_FORM/SEND_USER_FORM' });
  });

  test('Call fetchUpdateUser:', () => {
    // @ts-ignore
    localServerAPI.fetchUpdateUser.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'SEND_USER_FORM/SEND_USER_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchUpdateUser.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchUpdateUser.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'SEND_USER_FORM/SEND_USER_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});

describe('Testing clearSendDataUserForm AC', () => {
  const loadAC = clearSendDataUserFormAction();
  const dispatch = jest.fn();
  const response = { firstName: '', id: '', picture: '' };

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'SEND_USER_FORM/SEND_USER_FORM_CLEAR',
      payload: response
    });
  });
});
