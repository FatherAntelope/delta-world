import { loadUserPostsFormAC } from '../../actions/userPostsAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing loadUserPostsForm AC', () => {
  const loadAC = loadUserPostsFormAC('60d0fe4f5311236168a109ce', 0, 5);
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: [], limit: undefined, page: undefined, total: undefined
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchUserPostsForm.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'USER_POSTS_FORM/LOAD_USER_POSTS_FORM' });
  });

  test('Call fetchUserPostsForm:', () => {
    // @ts-ignore
    localServerAPI.fetchUserPostsForm.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'USER_POSTS_FORM/LOAD_USER_POSTS_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchUserPostsForm.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchUserPostsForm.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'USER_POSTS_FORM/LOAD_USER_POSTS_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});
