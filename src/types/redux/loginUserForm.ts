import { IResponseUserLogin } from '../api/dumMyApi';

export interface ILoginUserFormState {
  user: IResponseUserLogin;
  isLoading: boolean;
  error?: string;
}

export enum LoginUserFormACTypes {
  LOGIN_USER_FORM = 'LOGIN_USER_FORM/LOGIN_USER_FORM',
  LOGIN_USER_FORM_SUCCESS = 'LOGIN_USER_FORM/LOGIN_USER_FORM_SUCCESS',
  LOGIN_USER_FORM_ERROR = 'LOGIN_USER_FORM/LOGIN_USER_FORM_ERROR',
  LOGIN_USER_FORM_CLEAR = 'LOGIN_USER_FORM/LOGIN_USER_FORM_CLEAR',
}

interface ILoginUserFormAC {
  type: LoginUserFormACTypes.LOGIN_USER_FORM;
}

interface ILoginUserFormSuccessAC {
  type: LoginUserFormACTypes.LOGIN_USER_FORM_SUCCESS;
  payload: IResponseUserLogin;
}

interface ILoginUserFormErrorAC {
  type: LoginUserFormACTypes.LOGIN_USER_FORM_ERROR;
  payload: string | undefined;
}

interface ILoginUserFormClearAC {
  type: LoginUserFormACTypes.LOGIN_USER_FORM_CLEAR;
  payload: IResponseUserLogin;
}

export type LoginUserFormAC = ILoginUserFormAC | ILoginUserFormSuccessAC
| ILoginUserFormErrorAC | ILoginUserFormClearAC;
