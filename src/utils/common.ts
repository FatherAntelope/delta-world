import defaultUserAvatar from '../images/default-user-avatar.jpg';

const getUserFullName = (title: string, firstName: string, lastName: string) => (
  `${title ? `${title}.` : ''} ${firstName} ${lastName}`
);

const checkPictureAndGet = (picture: string) => (
  picture || defaultUserAvatar
);

export { getUserFullName, checkPictureAndGet };
