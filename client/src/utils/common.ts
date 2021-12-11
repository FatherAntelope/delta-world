import defaultUserAvatar from '../images/default-user-avatar.jpg';
import { ICreateUser } from '../types/api/dumMyApi';

const getUserFullName = (title: string, fullName: string): string => (
  `${title ? `${title}.` : ''} ${fullName}`
);

const checkPictureAndGet = (picture: string): string => (
  (picture && picture !== 'undefined') ? picture : defaultUserAvatar
);

const getUserGenderRu = (gender: string): string => {
  switch (gender) {
    case 'male':
      return 'Мужской';
    case 'female':
      return 'Женский';
    case 'other':
      return 'Другой';
    default:
      return '';
  }
};

const getJSONStringifyForRegisterUser = (formData: ICreateUser): string => JSON.stringify({
  firstName: formData.firstName,
  lastName: formData.lastName,
  email: formData.email,
  phone: formData.phone,
  title: formData.gender === 'male' ? 'mr' : 'ms',
  gender: formData.gender,
  dateOfBirth: formData.dateOfBirth,
  registerDate: new Date(),
});

const getJSONStringifyForEditDataUser = (formData: ICreateUser): string => JSON.stringify({
  firstName: formData.firstName,
  lastName: formData.lastName,
  gender: formData.gender,
  dateOfBirth: formData.dateOfBirth,
  phone: formData.phone,
  title: formData.gender === 'male' ? 'mr' : 'ms',
});

export {
  getUserFullName, checkPictureAndGet, getUserGenderRu,
  getJSONStringifyForRegisterUser, getJSONStringifyForEditDataUser
};
