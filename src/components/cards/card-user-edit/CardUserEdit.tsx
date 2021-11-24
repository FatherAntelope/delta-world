import React, { useContext, useEffect } from 'react';
import './CardUserEdit.css';
import '../../forms/auth-forms/Auth.css';
import {
  Button, DatePicker, Form, Input, Radio, Upload
} from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
import { MAXIMUM_DATE } from '../../../constants/common';
import { ThemeCheckboxContext } from '../../../contexts/theme-checkbox/ThemeCheckboxContext';

interface IProps {
  avatar: string;
  gender: 'male' | 'female' | 'other' | '';
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
}

const CardUserEdit = ({
  avatar, gender, firstName, lastName, dateOfBirth, phone
}: IProps) => {
  const [formEditDataUser] = Form.useForm();
  const themeCheckboxContext = useContext(ThemeCheckboxContext);

  useEffect(() => {
    if (firstName && gender && lastName && dateOfBirth && phone) {
      formEditDataUser.setFields([
        { name: 'firstName', value: firstName },
        { name: 'lastName', value: lastName },
        { name: 'gender', value: gender },
        { name: 'dateOfBirth', value: moment(dateOfBirth) },
        { name: 'phone', value: phone }
      ]);
    }
  }, [firstName, gender, lastName, dateOfBirth, phone]);

  return (
    <div className="user-edit-form">
      <div className="user-edit-form__header">
        <div className="user-edit-form__image">
          <img src={avatar} alt="user-img" />
        </div>
      </div>

      <div className="user-edit-form__image-edit">
        <Upload
          name="file"
          multiple={false}
          accept="image/jpeg, image/png"
          customRequest={(info) => {
            console.log(info.filename);
          }}
        >
          <Button size="small" icon={<UploadOutlined />}>Обновить фото</Button>
        </Upload>

        <Button size="small">Удалить фото</Button>
      </div>

      <Form form={formEditDataUser} name="formEditDataUser" layout="vertical">
        <Form.Item
          className={`user-auth__field ${themeCheckboxContext.isDarkTheme ? 'user-auth__field_theme_dark' : ''}`}
          name="firstName"
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
          <Input type="text" placeholder="Введите свое имя" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          className={`user-auth__field ${themeCheckboxContext.isDarkTheme ? 'user-auth__field_theme_dark' : ''}`}
          name="lastName"
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
          <Input type="text" placeholder="Введите свою фамилию" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          className={`
              user-auth__field user-auth__field_inline
              ${themeCheckboxContext.isDarkTheme ? 'user-auth__field_theme_dark' : ''}
            `}
          name="gender"
          label={<b>Пол:</b>}
          rules={[
            {
              required: true,
              message: 'Необходимо заполнить данное поле'
            }
          ]}
        >
          <Radio.Group>
            <Radio value="male">Мужской</Radio>
            <Radio value="female">Женский</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          className={`user-auth__field ${themeCheckboxContext.isDarkTheme ? 'user-auth__field_theme_dark' : ''}`}
          name="dateOfBirth"
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
          className={`user-auth__field ${themeCheckboxContext.isDarkTheme ? 'user-auth__field_theme_dark' : ''}`}
          name="phone"
          label={<b>Телефон:</b>}
          rules={[
            {
              required: true,
              message: 'Необходимо заполнить данное поле'
            },
            {
              pattern: new RegExp(/^(\+)?[0-9-()]+$/, 'g'),
              message: 'Поле должно содержать цифры или символы -() и + в начале'
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
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CardUserEdit;
