import { IResponseUserAuth } from '../api/dumMyApi';

export interface IRegisterUserFormState {
  registerUser: IResponseUserAuth;
  isLoading: boolean;
  error?: string;
}

export enum RegisterUserFormACTypes {
  REGISTER_USER_FORM = 'REGISTER_USER_FORM/REGISTER_USER_FORM',
  REGISTER_USER_FORM_SUCCESS = 'REGISTER_USER_FORM/REGISTER_USER_FORM_SUCCESS',
  REGISTER_USER_FORM_ERROR = 'REGISTER_USER_FORM/REGISTER_USER_FORM_ERROR'
}

interface IRegisterUserFormAC {
  type: RegisterUserFormACTypes.REGISTER_USER_FORM;
}

interface IRegisterUserFormSuccessAC {
  type: RegisterUserFormACTypes.REGISTER_USER_FORM_SUCCESS;
  payload: IResponseUserAuth;
}

interface IRegisterUserFormErrorAC {
  type: RegisterUserFormACTypes.REGISTER_USER_FORM_ERROR;
  payload: string | undefined;
}

export type RegisterUserFormAC = IRegisterUserFormAC | IRegisterUserFormSuccessAC | IRegisterUserFormErrorAC;
