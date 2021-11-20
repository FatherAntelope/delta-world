import React from 'react';
import './Auth.css';
import {
  Button, DatePicker, Form, Input, Radio
} from 'antd';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [form] = Form.useForm();
  return (
    <div className="user-auth">
      <div className="user-auth__body">
        <h2 className="user-auth__header">Регистрация</h2>
        <Form form={form} name="formRegisterUser" layout="vertical">
          <Form.Item
            style={{ marginBottom: 10 }}
            name="userFirstName"
            label={<b>Имя:</b>}
            rules={[
              {
                required: true,
                message: 'Необходимо заполнить данное поле'
              },
              {
                whitespace: true,
                message: 'Поле не должно содержать лишние пробелы'
              },
              {
                pattern: new RegExp(/^[А-яA-z]+$/, 'g'),
                message: 'Поле должно содержать символы латинского алфавита или кириллицы'
              },
              {
                min: 2, max: 50, message: 'Поле должно содержать от 2 до 50 символов'
              }
            ]}
          >
            <Input type="text" placeholder="Введите свое имя" />
          </Form.Item>
          <Form.Item
            className="user-auth__inline-item"
            name="userGender"
            hasFeedback
            label={<b>Пол:</b>}
            rules={[
              {
                required: true,
                message: 'Необходимо заполнить данное поле'
              }
            ]}
          >
            <Radio.Group>
              <Radio value="female">Мужской</Radio>
              <Radio value="other">Женский</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 10 }}
            name="userDateOfBirth"
            hasFeedback
            label={<b>Дата рождения:</b>}
            rules={[
              {
                required: true,
                message: 'Необходимо заполнить данное поле'
              }
            ]}
          >
            <DatePicker style={{ width: '100%' }} format="DD.MM.YYYY" picker="date" placeholder="ДД.ММ.ГГГГ" />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 10 }}
            name="userEmail"
            label={<b>Email:</b>}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Необходимо заполнить данное поле'
              },
              {
                type: 'email',
                message: 'Email введен некорректно'
              }
            ]}
          >
            <Input type="email" placeholder="example@mail.com" />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 15 }}
            name="userPhone"
            hasFeedback
            label={<b>Телефон:</b>}
            rules={[
              {
                required: true,
                message: 'Необходимо заполнить данное поле'
              },
              {
                pattern: new RegExp(/^[0-9]+$/, 'g'),
                message: 'Поле должно содержать цифры'
              }
            ]}
          >
            <Input type="tel" placeholder="+79991234567" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="user-auth__button"
            >
              Зарегистрироваться
            </Button>
            <p style={{ textAlign: 'center', marginTop: '7px' }}>
              Уже есть аккаунт?
              {' '}
              <Link to="/login">Войти</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
