import { closeModalsFormAC, openModalsFormAC } from '../../actions/modalsFormAction';

describe('Testing closeModalsForm AC', () => {
  const loadAC = closeModalsFormAC();
  const dispatch = jest.fn();

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'MODALS_FORM/CLOSE_MODALS_FORM',
      payload: {}
    });
  });
});

describe('Testing openModalsForm AC', () => {
  const loadAC = openModalsFormAC('modal', {});
  const dispatch = jest.fn();

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'MODALS_FORM/OPEN_MODALS_FORM',
      payload: { modal: { isActive: true, modalData: {} } }
    });
  });
});
