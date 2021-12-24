import {
  uploadImageEditAC, clearImageEditFormAC
} from '../../actions/imageEditFormAction';
import * as localServerAPI from '../../utils/fetchLocalServer';

jest.mock('../../utils/fetchLocalServer');

describe('Testing uploadImageEdit AC', () => {
  // @ts-ignore
  const loadAC = uploadImageEditAC('17y3i2kkp23ohf7y3u82j9i', <Blob>'few6th7j281u-j2d');
  const dispatch = jest.fn();
  const responseWaiting = 'waiting';
  const responseSuccess = {
    status: 200, data: { data: { picture: '' } }
  };
  const responseError = undefined;
  const emptyFunc = () => {};

  test('Show loading:', () => {
    // @ts-ignore
    localServerAPI.fetchUpdateUser.mockResolvedValue(responseWaiting);
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'IMAGE_EDIT_FORM/IMAGE_EDIT_FORM' });
  });

  test('Call fetchUpdateUser:', () => {
    // @ts-ignore
    localServerAPI.fetchUpdateUser.mockResolvedValue(responseSuccess);
    dispatch.mockImplementationOnce(emptyFunc).mockImplementationOnce((action) => {
      expect(action).toEqual({
        type: 'IMAGE_EDIT_FORM/IMAGE_EDIT_FORM_SUCCESS',
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
        type: 'IMAGE_EDIT_FORM/IMAGE_EDIT_FORM_ERROR',
        payload: String(responseError)
      });
      done();
    });
    loadAC(dispatch);
  });
});

describe('Testing clearImageEditForm AC', () => {
  const loadAC = clearImageEditFormAC();
  const dispatch = jest.fn();

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'IMAGE_EDIT_FORM/IMAGE_EDIT_FORM_CLEAR',
      payload: ''
    });
  });
});
