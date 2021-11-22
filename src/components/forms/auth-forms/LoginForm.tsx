import React, { useEffect } from 'react';
import './Auth.css';
import {
  Alert, Button, Form, Input
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { COOKIE_LIFETIME } from '../../../constants/common';

const LoginForm = () => {
  const [form] = Form.useForm();
  const [cookies, setCookies] = useCookies();
  const localeHistory = useHistory();
  const { user, error } = useTypedSelector((state) => state.loginUserForm);
  const { loginUserFormAC } = useActions();

  const handleFinishForm = () => {
    if (!cookies.user_id) {
      loginUserFormAC(form.getFieldValue('userID'));
    }
  };

  useEffect(() => {
    if (cookies.user_id && cookies.user_first_name && cookies.user_picture) {
      localeHistory.push(`/user/${cookies.user_id}`);
    }
  }, []);

  useEffect(() => {
    if (
      error === undefined && user.id && (
        cookies.user_id === undefined || cookies.user_first_name === undefined || cookies.user_picture === undefined
      )
    ) {
      setCookies('user_id', user.id, { maxAge: COOKIE_LIFETIME });
      setCookies('user_first_name', user.firstName, { maxAge: COOKIE_LIFETIME });
      setCookies('user_picture', user.picture, { maxAge: COOKIE_LIFETIME });
      localeHistory.push(`/user/${user.id}`);
    }
  }, [user.id]);

  return (
    <div className="user-auth">
      <div className="user-auth__body">
        <h2 className="user-auth__header">Вход</h2>
        <Form form={form} name="formAuthUser" layout="vertical" onFinish={handleFinishForm}>
          <Form.Item
            name="userID"
            label={<b>ID:</b>}
            rules={[{
              required: true, message: 'Заполните данное поле'
            }]}
          >
            <Input type="text" placeholder="Введите свой ID" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="user-auth__button"
            >
              Войти
            </Button>
            <p style={{ textAlign: 'center', marginTop: '7px' }}>
              Еще нет аккаунта?
              {' '}
              <Link to="/register">Зарегистрироваться</Link>
            </p>
            {(error !== undefined && !user.id) && (
              <Alert message="Введен неверный ID, повторите авторизацию" type="error" />
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
