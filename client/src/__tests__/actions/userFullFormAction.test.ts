import { loadUserFullFormAC } from '../../actions/userFullFormAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing loadUserFullForm AC', () => {
  const loadAC = loadUserFullFormAC('60d0fe4f5311236168a109ce');
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: {}
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchUserFullForm.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'USER_FULL_FORM/LOAD_USER_FULL_FORM' });
  });

  test('Call fetchUserFullForm:', () => {
    // @ts-ignore
    localServerAPI.fetchUserFullForm.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'USER_FULL_FORM/LOAD_USER_FULL_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchUserFullForm.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchUserFullForm.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'USER_FULL_FORM/LOAD_USER_FULL_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});
