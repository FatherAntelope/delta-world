import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {
  fetchUsersForm, fetchPostsForm, fetchUserFullForm, fetchUserPostsForm, fetchRegisterUser, fetchPostCommentsForm,
  fetchPostForm, fetchUpdateUser, fetchUserLoginForm
} from '../../utils/fetchLocalServer';

let mock: any;
beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

const fetchResponseOK = {
  data: 'any data'
};

const fetchResponseError = {
  error: 'error message'
};

describe('Function fetchUsersForm test', () => {
  const url = 'http://localhost:5000/api/user';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchUsersForm(0, 5);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchUsersForm(0, 5);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});

describe('Function fetchPostsForm test', () => {
  const url = 'http://localhost:5000/api/post';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchPostsForm(0, 5);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchPostsForm(0, 5);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});

describe('Function fetchUserFullForm test', () => {
  const url = 'http://localhost:5000/api/user/60d0fe4f5311236168a109ce';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchUserFullForm('60d0fe4f5311236168a109ce');
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchUserFullForm('60d0fe4f5311236168a109ce');
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});

describe('Function fetchUserLoginForm test', () => {
  const url = 'http://localhost:5000/api/user/60d0fe4f5311236168a109ce/login';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchUserLoginForm('60d0fe4f5311236168a109ce');
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchUserLoginForm('60d0fe4f5311236168a109ce');
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});

describe('Function fetchUserPostsForm test', () => {
  const url = 'http://localhost:5000/api/user/60d0fe4f5311236168a109ce/post?page=0&limit=6';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchUserPostsForm('60d0fe4f5311236168a109ce', 0, 6);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(undefined);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchUserPostsForm('60d0fe4f5311236168a109ce', 0, 6);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(undefined);
    });
  });
});

describe('Function fetchPostForm test', () => {
  const url = 'http://localhost:5000/api/post/60d21b4967d0d8992e610c90';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchPostForm('60d21b4967d0d8992e610c90');
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchPostForm('60d21b4967d0d8992e610c90');
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});

describe('Function fetchPostCommentsForm test', () => {
  const url = 'http://localhost:5000/api/post/60d21bf967d0d8992e610e9b/comment?page=0&limit=6';
  test('With OK response', () => {
    mock.onGet(url).reply(200, fetchResponseOK);
    const result = fetchPostCommentsForm('60d21bf967d0d8992e610e9b', 0, 6);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(undefined);
    });
  });

  test('With Error response', () => {
    mock.onGet(url).reply(500, fetchResponseError);
    const result = fetchPostCommentsForm('60d21bf967d0d8992e610e9b', 0, 6);
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(undefined);
    });
  });
});

describe('Function fetchPostForm test', () => {
  const url = 'http://localhost:5000/api/user/61b375ef130cb53176bb775e';
  test('With OK response', () => {
    mock.onPut(url).reply(200, fetchResponseOK);
    const result = fetchUpdateUser('61b375ef130cb53176bb775e', { firstName: 'Иванов' });
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onPut(url).reply(500, fetchResponseError);
    const result = fetchUpdateUser('61b375ef130cb53176bb775e', { firstName: 'Иванов' });
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});

describe('Function fetchRegisterUser test', () => {
  const url = 'http://localhost:5000/api/user/create';
  test('With OK response', () => {
    mock.onPost(url).reply(200, fetchResponseOK);
    const result = fetchRegisterUser({
      lastName: 'Иван',
      firstName: 'Иванов',
      email: 'test12.user@gmail.com'
    });
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseOK);
    });
  });

  test('With Error response', () => {
    mock.onPost(url).reply(500, fetchResponseError);
    const result = fetchRegisterUser({
      lastName: 'Иван',
      firstName: 'Иванов',
      email: 'test12.user@gmail.com'
    });
    expect(result).toEqual(expect.any(Promise));
    result.then((data) => {
      expect(data.data).toEqual(fetchResponseError);
    });
  });
});
