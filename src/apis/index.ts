/// <reference types="vite/client" />

import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { INIT_USER_STATE } from '@/stores/userAtom';

const BASE_URL = import.meta.env.VITE_BASE_API_END_POINT;

const logOnDev = (message: string) => {
   if (import.meta.env.MODE === 'development') {
      console.log(message);
   }
};

interface ApiResponse<T> {
   data: T;
   message: string;
   code?: number;
   description?: string;
}

interface ApiError<T> extends AxiosError<ApiResponse<T>> {}

const createUnauthenticatedApi = (): AxiosInstance => {
   const api = axios.create({
      baseURL: BASE_URL,
   });

   api.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
         logOnDev(`🚀 [${config.method?.toUpperCase()}] ${config.url} | Request`);
         config.headers['Content-Type'] = 'application/json';

         return config;
      },
      (error: ApiError<any>) => {
         logOnDev(
            `🚨 [${error.config?.method?.toUpperCase()}] ${error.config?.url} | Error ${status} ${error.message}`,
         );
         return Promise.reject(error);
      },
   );

   api.interceptors.response.use(
      (response: AxiosResponse<ApiResponse<any>>) => {
         logOnDev(`📡 [${response.config.method?.toUpperCase()}] ${response.config.url} | Response ${status}`);
         return response;
      },
      (error: ApiError<any>) => {
         logOnDev(
            `🚨 [${error.config?.method?.toUpperCase()}] ${error.config?.url} | Error ${status} ${error.message}`,
         );
         return Promise.reject(error);
      },
   );

   return api;
};

const createAuthenticatedApi = (): AxiosInstance => {
   const api = axios.create({
      baseURL: BASE_URL,
   });

   api.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
         logOnDev(`🚀 [${config.method?.toUpperCase()}] ${config.url} | Request`);

         // const accessToken = localStorage.getItem('accessToken');

         const initial = localStorage.getItem('userState');
         const initialData = initial ? JSON.parse(initial) : INIT_USER_STATE;

         const { accessToken } = initialData;

         if (!accessToken) {
            // alert('로그인이 필요합니다.');
            // window.location.href = '/sign-in';

            const error = new Error('로그인이 필요합니다.');
            error.name = 'requireAuth';
            throw error;
         }

         config.headers = config.headers ?? {};
         config.headers['Content-Type'] = 'application/json';
         config.headers.Authorization = accessToken;

         return config;
      },

      (error: ApiError<any>) => {
         logOnDev(
            `🚨 [${error.config?.method?.toUpperCase()}] ${error.config?.url} | Error ${status} ${error.message}`,
         );

         return Promise.reject(error);
      },
   );

   api.interceptors.response.use(
      (response: AxiosResponse<ApiResponse<any>>) => {
         logOnDev(`📡 [${response.config.method?.toUpperCase()}] ${response.config.url} | Response ${status}`);
         return response;
      },
      (error: ApiError<any>) => {
         logOnDev(
            `🚨 [${error.config?.method?.toUpperCase()}] ${error.config?.url} | Error ${status} ${error.message}`,
         );

         if (String(error.response?.data.code) === '40122') {
            // 토큰 만료
            console.error(error.response?.data.message);
            // req refresh api가 없음
            localStorage.removeItem('userState');
            window.location.reload();
            return;
         }
         if (String(error.response?.data.code) === '40123') {
            // 유효하지 않은 토큰
            console.error(error.response?.data.message);
            localStorage.removeItem('userState');
            window.location.reload();
            return;
         }

         return Promise.reject(error);
      },
   );

   return api;
};

export const requestWithAuth = createAuthenticatedApi();
export const requestWithoutAuth = createUnauthenticatedApi();
