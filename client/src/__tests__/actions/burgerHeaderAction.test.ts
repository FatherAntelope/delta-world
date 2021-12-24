import { burgerHeaderSetNotActiveAC, burgerHeaderSetActiveAC } from '../../actions/burgerHeaderAction';

describe('Testing burgerHeaderSetNotActive AC', () => {
  const loadAC = burgerHeaderSetNotActiveAC();
  const dispatch = jest.fn();

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'BURGER_HEADER/BURGER_HEADER_SET_NOT_ACTIVE',
      payload: { isActive: false }
    });
  });
});

describe('Testing burgerHeaderSetActive AC', () => {
  const loadAC = burgerHeaderSetActiveAC();
  const dispatch = jest.fn();

  test('Show loading:', () => {
    loadAC(dispatch);
    expect(dispatch).toBeCalledWith({
      type: 'BURGER_HEADER/BURGER_HEADER_SET_ACTIVE',
      payload: { isActive: true }
    });
  });
});
