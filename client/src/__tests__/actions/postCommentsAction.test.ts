import { loadPostCommentsFormAC } from '../../actions/postCommentsAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing loadPostCommentsForm AC', () => {
  const loadAC = loadPostCommentsFormAC('60d0fe4f5311236168a109ce', 0, 5);
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: [], limit: undefined, page: undefined, total: undefined
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchPostCommentsForm.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'POST_COMMENTS_FORM/LOAD_POST_COMMENTS_FORM' });
  });

  test('Call fetchUserPostsForm:', () => {
    // @ts-ignore
    localServerAPI.fetchPostCommentsForm.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'POST_COMMENTS_FORM/LOAD_POST_COMMENTS_FORM_SUCCESS',
        payload: responseSuccess
      });
    });
    loadAC(dispatch);
  });

  test('Response undefined:', () => {
    // @ts-ignore
    localServerAPI.fetchPostCommentsForm.mockResolvedValue(undefined);
    loadAC(dispatch);
  });

  test('Show error:', (done) => {
    // @ts-ignore
    localServerAPI.fetchPostCommentsForm.mockRejectedValue(responseError);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'POST_COMMENTS_FORM/LOAD_POST_COMMENTS_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});
