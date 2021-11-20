import React from 'react';
import './Auth.css';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [form] = Form.useForm();
  return (
    <div className="user-auth">
      <div className="user-auth__body">
        <h2 className="user-auth__header">Вход</h2>
        <Form form={form} name="formAuthUser" layout="vertical">
          <Form.Item name="userID" label={<b>ID:</b>}>
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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
