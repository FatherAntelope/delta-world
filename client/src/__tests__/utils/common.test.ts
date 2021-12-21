import { checkPictureAndGet, getUserFullName, getUserGenderRu } from '../../utils/common';

describe('Function getUserFullName test', () => {
  test('Defined title', () => {
    expect(getUserFullName('dr', 'Ivan Ivanov')).toBe('dr. Ivan Ivanov');
    expect(getUserFullName('mr', 'Кошкин Мышкин')).toBe('mr. Кошкин Мышкин');
  });

  test('Undefined title', () => {
    expect(getUserFullName('', 'Ivan Ivanov')).toBe('Ivan Ivanov');
    expect(getUserFullName('', 'Кошкин Мышкин')).toBe('Кошкин Мышкин');
    // @ts-ignore
    expect(getUserFullName(null, 'Кошкин Мышкин')).toBe('Кошкин Мышкин');
  });
});

describe('Function checkPictureAndGet test', () => {
  test('Defined picture', () => {
    expect(checkPictureAndGet('url')).toBe('url');
  });

  test('Undefined picture', () => {
    const str = 'default-user-avatar.jpg';
    expect(checkPictureAndGet('undefined')).toBe(str);
    expect(checkPictureAndGet('')).toBe(str);
    // @ts-ignore
    expect(checkPictureAndGet(null)).toBe(str);
  });
});

describe('Function getUserGenderRu test', () => {
  test('Normal', () => {
    expect(getUserGenderRu('male')).toBe('Мужской');
    expect(getUserGenderRu('female')).toBe('Женский');
    expect(getUserGenderRu('other')).toBe('Другой');
    // @ts-ignore
    expect(getUserGenderRu(null)).toBe('');
  });
});
