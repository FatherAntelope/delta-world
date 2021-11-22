import React, { useEffect } from 'react';
import './Auth.css';
import moment from 'moment';
import {
  Alert,
  Button, Col, DatePicker, Form, Input, Radio, Row
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ICreateUser } from '../../../types/api/dumMyApi';
import { getJSONStringifyFromFormData } from '../../../utils/common';
import { useActions } from '../../../hooks/useActions';
import { COOKIE_LIFETIME, MAXIMUM_DATE } from '../../../constants/common';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [cookies, setCookies] = useCookies();
  const localeHistory = useHistory();
  const { registerUser, error } = useTypedSelector((state) => state.registerUserForm);
  const { registerUserFormAction, loginUserSetValuesFormAC } = useActions();

  const handleFinishForm = () => {
    const formData: ICreateUser = form.getFieldsValue();
    const formBody = getJSONStringifyFromFormData(formData);
    registerUserFormAction(formBody);
  };

  useEffect(() => {
    if (cookies.user_id && cookies.user_first_name && cookies.user_picture) {
      localeHistory.push(`/user/${cookies.user_id}`);
    }
  }, []);

  useEffect(() => {
    if (
      error === undefined && registerUser.id && (
        cookies.user_id === undefined || cookies.user_first_name === undefined || cookies.user_picture === undefined
      )
    ) {
      setCookies('user_id', registerUser.id, { maxAge: COOKIE_LIFETIME });
      setCookies('user_first_name', registerUser.firstName, { maxAge: COOKIE_LIFETIME });
      setCookies('user_picture', registerUser.picture, { maxAge: COOKIE_LIFETIME });
      loginUserSetValuesFormAC(registerUser.id, registerUser.picture, registerUser.firstName);
      localeHistory.push(`/user/${registerUser.id}`);
    }
  }, [registerUser.id]);

  return (
    <div className="user-auth">
      <div className="user-auth__body">
        <h2 className="user-auth__header">Регистрация</h2>
        <Form form={form} name="formRegisterUser" layout="vertical" onFinish={handleFinishForm}>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="firstName"
                hasFeedback
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
            </Col>
            <Col span={12}>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="lastName"
                hasFeedback
                label={<b>Фамилия:</b>}
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
                <Input type="text" placeholder="Введите свою фамилию" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            className="user-auth__inline-item"
            name="gender"
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
            name="dateOfBirth"
            hasFeedback
            label={<b>Дата рождения:</b>}
            rules={[
              {
                required: true,
                message: 'Необходимо заполнить данное поле'
              },
            ]}
          >
            <DatePicker
              style={{ width: '100%' }}
              format="DD.MM.YYYY"
              picker="date"
              placeholder="ДД.ММ.ГГГГ"
              disabledDate={(item) => !item || item.isAfter(MAXIMUM_DATE) || item.isSameOrBefore('1960-01-01')}
              defaultPickerValue={moment(MAXIMUM_DATE)}
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 10 }}
            name="email"
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
            name="phone"
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
            {(error !== undefined && !registerUser.id) && (
              <Alert message="Аккаунт с таким email уже существует" type="error" />
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
