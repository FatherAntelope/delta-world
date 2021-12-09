const getConvertDateOfPublish = (dateTime: string): string => {
  const date = new Date(dateTime);
  const months: string[] = [
    'янв.', 'фев.', 'марта', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'
  ];
  return `${date.getDate()} ${months[date.getMonth()]}${
    new Date().getFullYear() !== date.getFullYear() ? ` ${date.getFullYear()} г.` : ''
  } в ${date.getHours()}:${date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()}`;
};

const getConvertUserFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

export { getConvertDateOfPublish, getConvertUserFullName };
