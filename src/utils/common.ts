import defaultUserAvatar from '../images/default-user-avatar.jpg';

const getUserFullName = (title: string, firstName: string, lastName: string): string => (
  `${title ? `${title}.` : ''} ${firstName} ${lastName}`
);

const checkPictureAndGet = (picture: string): string => (
  picture || defaultUserAvatar
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

const getDateRU = (dateTime: string): string => {
  const date = new Date(dateTime);
  const months: string[] = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const getDateTimePublication = (dateTime: string): string => {
  const date = new Date(dateTime);
  const months: string[] = [
    'янв.', 'фев.', 'марта', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'
  ];
  return `${date.getDate()} ${months[date.getMonth()]}${
    new Date().getFullYear() !== date.getFullYear() ? ` ${date.getFullYear()} г.` : ''
  } в ${date.getHours()}:${date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()}`;
};

export {
  getUserFullName, checkPictureAndGet, getDateTimePublication, getUserGenderRu, getDateRU
};
