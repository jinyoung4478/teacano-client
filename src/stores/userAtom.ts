import {atomWithLocalStorage} from '@/stores/common';

interface IUserState {
  isLoggedIn: boolean;
  accessToken?: string;
  refreshToken?: string;
}

export const INIT_USER_STATE = {
  isLoggedIn: false,
};

export const userState = atomWithLocalStorage<IUserState>(
  'userState',
  INIT_USER_STATE
);
