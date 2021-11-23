import { IResponseUserAuth } from '../api/dumMyApi';

export interface ISendUserFormState {
  sendUser: IResponseUserAuth;
  isLoading: boolean;
  error?: string;
}

export enum SendUserFormACTypes {
  SEND_USER_FORM = 'SEND_USER_FORM/SEND_USER_FORM',
  SEND_USER_FORM_SUCCESS = 'SEND_USER_FORM/SEND_USER_FORM_SUCCESS',
  SEND_USER_FORM_ERROR = 'SEND_USER_FORM/SEND_USER_FORM_ERROR'
}

interface ISendUserFormAC {
  type: SendUserFormACTypes.SEND_USER_FORM;
}

interface ISendUserFormSuccessAC {
  type: SendUserFormACTypes.SEND_USER_FORM_SUCCESS;
  payload: IResponseUserAuth;
}

interface ISendUserFormErrorAC {
  type: SendUserFormACTypes.SEND_USER_FORM_ERROR;
  payload: string | undefined;
}

export type SendUserFormAC = ISendUserFormAC | ISendUserFormSuccessAC | ISendUserFormErrorAC;
