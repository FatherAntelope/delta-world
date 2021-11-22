import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UserFullForm from './user-full-form/UserFullForm';
import UserPostsForm from './user-posts-form/UserPostsForm';
import { FORM_LIMIT_USER_POSTS } from '../../../constants/common';
import { useActions } from '../../../hooks/useActions';

interface ISearchParams {
  id: string;
}

const ProfileForm = () => {
  const searchParams = useParams<ISearchParams>();
  const locationHook = useLocation();
  const { loadUserFullFormAC, loadUserPostsFormAC } = useActions();

  useEffect(() => {
    loadUserFullFormAC(searchParams.id);
    loadUserPostsFormAC(searchParams.id, 0, FORM_LIMIT_USER_POSTS);
  }, [locationHook]);

  return (
    <>
      <UserFullForm />
      <UserPostsForm />
    </>
  );
};

export default ProfileForm;
